"use client";

import { useState } from "react";
import Comment from "./Comment";

type Comment = {
  id: string;
  name: string;
  text: string;
  date: string;
};

const mockComments: Comment[] = [
  {
    id: "1",
    name: "Alice",
    text: "This was super helpful, thanks for the tips!",
    date: "July 12, 2025",
  },
  {
    id: "2",
    name: "David",
    text: "I love sustainable fashion! Great write-up.",
    date: "July 13, 2025",
  },
];

export default function BlogDetailPage() {
  const [comments, setComments] = useState<Comment[]>(mockComments);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      text,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    };

    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white">
      {/* Blog Content */}
      <article>
        <img
          src="https://cdn.pixabay.com/photo/2017/08/06/00/09/fashion-2581978_640.jpg"
          alt="Blog Cover"
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">Sustainable Fashion Tips</h1>
        <p className="text-sm text-gray-500 mb-6">
          By Clara Nguyen · July 10, 2025
        </p>
        <div className="space-y-4 text-[17px] leading-relaxed">
          <p>
            Sustainable fashion is not just a trend, it's a movement. By making
            smarter choices, we can reduce waste and make a positive impact.
          </p>
          <p>
            Look for natural fibers, shop second-hand, and support brands that
            value ethical practices. Small steps make a big difference.
          </p>
          <p>
            Remember: quality over quantity. Invest in timeless pieces that last
            rather than fast fashion that fades.
          </p>
        </div>
      </article>
      <Comment />
    </div>
  );
}
