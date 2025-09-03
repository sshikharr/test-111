import dbConnect from "";
import Blog from "../models/Blog";

export async function GET() {
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

  return new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "application/xml" },
  });
}
