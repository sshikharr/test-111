"use client";
import { useState } from "react";

export default function AddBlog({ onBlogAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    summary: "",
    isFeatured: false,
    image: "",
    category: "",
    tags: "",
    seoTitle: "",
    seoDescription: "",
    seoAuthor: "",
    seoImage: "",
    seoKeywords: "",
    editorDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      slug: formData.slug,
      description: formData.description,
      summary: formData.summary,
      isFeatured: formData.isFeatured,
      image: formData.image,
      category: formData.category,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      seo: {
        title: formData.seoTitle,
        description: formData.seoDescription,
        author: formData.seoAuthor,
        image: formData.seoImage,
        keywords: formData.seoKeywords.split(",").map((k) => k.trim()),
      },
      editorDescription: formData.editorDescription,
    };

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      await res.json();
      onBlogAdded(); // Refresh blog list after addition
      setFormData({
        title: "",
        slug: "",
        description: "",
        summary: "",
        isFeatured: false,
        image: "",
        category: "",
        tags: "",
        seoTitle: "",
        seoDescription: "",
        seoAuthor: "",
        seoImage: "",
        seoKeywords: "",
        editorDescription: "",
      });
    } else {
      console.error("Error adding blog");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 border rounded-lg">
      <h2 className="text-xl font-bold">Add New Blog</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div>
        <label>Slug:</label>
        <input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div>
        <label>Summary:</label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>Featured:</label>
        <input
          type="checkbox"
          name="isFeatured"
          checked={formData.isFeatured}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div>
        <label>Tags (comma separated):</label>
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <h3 className="font-semibold">SEO Details</h3>
      <div>
        <label>SEO Title:</label>
        <input
          type="text"
          name="seoTitle"
          value={formData.seoTitle}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>SEO Description:</label>
        <textarea
          name="seoDescription"
          value={formData.seoDescription}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>SEO Author:</label>
        <input
          type="text"
          name="seoAuthor"
          value={formData.seoAuthor}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>SEO Image URL:</label>
        <input
          type="text"
          name="seoImage"
          value={formData.seoImage}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>SEO Keywords (comma separated):</label>
        <input
          type="text"
          name="seoKeywords"
          value={formData.seoKeywords}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <div>
        <label>Editor Description (HTML):</label>
        <textarea
          name="editorDescription"
          value={formData.editorDescription}
          onChange={handleChange}
          className="w-full border p-2"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Blog
      </button>
    </form>
  );
}
