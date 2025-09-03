import fs from "fs";
import path from "path";
import Blog from "../../lib/db/models/blog";
import dbConnect from "../../lib/db/db";

export async function updateSitemap() {
  await dbConnect();
  const blogs = await Blog.find({}, "slug updatedAt");
  const sitemapItems = blogs
    .map(
      (blog) => `
  <url>
    <loc>https://juristo.in/blogs/${blog.slug}</loc>
    <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
  </url>`
    )
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapItems}
</urlset>
`;
  const sitemapPath = path.join(process.cwd(), "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap, "utf8");
}
