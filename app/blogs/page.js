"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import AddBlog from "./addBlog";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/blogs");
      const data = await res.json();
      setBlogs(data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
    const interval = setInterval(fetchBlogs, 10000);
    return () => clearInterval(interval);
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-[80px] font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-100 to-blue-50 bg-clip-text text-transparent">
            Blog
          </span>
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Insights, news, and updates from Juristo.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-24 w-full rounded-lg" />
              ))
            : filteredBlogs.map((blog) => (
                <Link key={blog._id} href={`/blogs/${blog.slug}`}>
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
                    <h2 className="text-2xl font-semibold mb-2 text-blue-600">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.summary}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
}
