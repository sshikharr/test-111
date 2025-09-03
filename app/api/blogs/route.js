import dbConnect from "../../../lib/db/db";
import Blog from "../../../lib/db/models/blog";
import { updateSitemap } from "../../utils/updarteSitemap";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const blogData = await request.json();
    const newBlog = await Blog.create(blogData);
    // Regenerate sitemap on new blog addition
    await updateSitemap();
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 }
    );
  }
}
