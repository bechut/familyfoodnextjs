'use client';

import { useState } from 'react';

type Comment = {
  id: string;
  name: string;
  message: string;
  date: string;
};

const initialComments: Comment[] = [
  {
    id: '1',
    name: 'Alice',
    message: 'Great article, very helpful!',
    date: 'July 12, 2025',
  },
  {
    id: '2',
    name: 'Bob',
    message: 'Thanks for sharing these tips!',
    date: 'July 13, 2025',
  },
];

export default function Comment() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      name,
      message,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
  };

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-[#6e0e06] mb-6">Comments</h2>

      {/* Comment form */}
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <textarea
          placeholder="Your comment"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Post Comment
        </button>
      </form>

      {/* Comment list */}
      <div className="space-y-6">
        {comments.map((c) => (
          <div
            key={c.id}
            className="border border-gray-200 bg-white p-4 rounded-md shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-[#6e0e06]">{c.name}</span>
              <span className="text-sm text-gray-500">{c.date}</span>
            </div>
            <p className="text-gray-700">{c.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
