import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    summary: { type: String },
    isFeatured: { type: Boolean, default: false },
    image: { type: String },
    category: { type: String, required: true },
    tags: [{ type: String }],
    seo: {
      title: { type: String },
      description: { type: String },
      author: { type: String },
      image: { type: String },
      keywords: [{ type: String }],
    },
    editorDescription: { type: String },
  },
  { timestamps: true }
);

// Create text index for search and specific indexes for tags and category
BlogSchema.index({ title: "text", summary: "text", description: "text" });
BlogSchema.index({ tags: 1 });
BlogSchema.index({ category: 1 });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
