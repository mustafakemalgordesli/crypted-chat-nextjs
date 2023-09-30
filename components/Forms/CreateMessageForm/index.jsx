"use client";

import { useState } from "react";

export default function CreateMessageForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/chatitems/", {
        message,
        chatId,
      });
      console.log("Chat Item successful:", response.data);
    } catch (error) {
      console.error("Chat Item failed:", error);
    }
  };
  return (
    <>
      {/* CHAT INPUT */}
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="block mx-4 p-2.5 w-full text-sm text-gray-200 rounded-lg border border-gray-500 bg-transparent"
        placeholder="Your message..."
      />
      {/* BUTTON */}
      <button
        onClick={handleSubmit}
        type="submit"
        className="inline-flex justify-center p-2  rounded-full cursor-pointer text-blue-500 hover:bg-gray-600"
      >
        <svg
          className="w-5 h-5 rotate-90"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
        </svg>
        <span className="sr-only">Send message</span>
      </button>
    </>
  );
}
