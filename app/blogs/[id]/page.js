// src/app/blogs/[id]/page.jsx
import dbConnect from "../../../lib/db/db";
import Blog from "../../../lib/db/models/blog";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BlogDetailPage({ params }) {
  // Connect to the database
  await dbConnect();

  // Fetch the blog using the slug (passed as id in the URL)
  const blog = await Blog.findOne({ slug: params.id }).lean();

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.createdAt).toLocaleDateString();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <Card className="shadow-lg">
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover"
          />
        )}
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold">{blog.title}</CardTitle>
          <p className="text-gray-500 text-sm">Created At: {formattedDate}</p>
          {blog.summary && <p className="mt-2 text-lg">{blog.summary}</p>}
        </CardHeader>
        <CardContent className="p-6">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: blog.editorDescription || blog.description,
            }}
          />
          <div className="mt-6">
            <span className="font-semibold">Category:</span> {blog.category}
          </div>
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-2">
              <span className="font-semibold">Tags:</span>{" "}
              {blog.tags.join(", ")}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
