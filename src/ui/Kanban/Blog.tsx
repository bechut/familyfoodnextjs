"use client";

type Blog = {
  id: string;
  title: string;
  summary: string;
  image: string;
  author?: string;
  date?: string;
};

const blogs: Blog[] = [
  {
    id: "1",
    title: "5 Essentials for Autumn Style",
    summary: "Discover the must-have accessories for fall fashion this year.",
    image:
      "https://cdn.pixabay.com/photo/2023/10/13/10/11/fashion-8311600_640.jpg",
    author: "Jane Doe",
    date: "July 10, 2025",
  },
  {
    id: "2",
    title: "How to Choose the Right Watch",
    summary: "A quick guide on selecting timepieces that match your lifestyle.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/10/07/hand-1866533_640.jpg",
    author: "John Smith",
    date: "July 6, 2025",
  },
  {
    id: "3",
    title: "Sustainable Fashion Tips",
    summary: "Learn how to shop ethically and reduce waste in style.",
    image:
      "https://cdn.pixabay.com/photo/2017/08/06/00/09/fashion-2581978_640.jpg",
    author: "Clara Nguyen",
    date: "June 25, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen px-6 py-10 bg-white text-[#6e0e06]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Latest Blog Posts</h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{blog.summary}</p>
                <div className="text-xs text-gray-500 mt-auto">
                  {blog.author} · {blog.date}
                </div>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 text-sm mt-4 inline-block"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
