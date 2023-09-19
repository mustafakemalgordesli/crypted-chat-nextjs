"use client";

import Image from "next/image";
import EmojiPicker from "@/components/EmojiPicker";
import ChatItem from "../ChatItem";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Chat = ({ token }) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavioe: "smooth" });
  }, []);

  const router = useRouter();

  const [message, setMessage] = useState("");

  const chatId = 1;
  // const apiUrl = "http://localhost:3000/api/chatitems/";

  // const headers = {
  //   Authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNCwidXNlcm5hbWUiOiJ1c2VydHdvIiwiZW1haWwiOiJ1c2VydHdvQGdtYWlsLmNvbSJ9LCJpYXQiOjE2OTQ1MDcxNDcsImV4cCI6MTY5NzA5OTE0N30.kbkVFcogLZyixQdmJZUg4pZlFw09419M-fEuyHOGqpk",
  //   "Content-Type": "application/json",
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/api/chatitems/",
        {
          message,
          chatId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      router.refresh();
      console.log("Chat Item successful:", response.data);
    } catch (error) {
      console.error("Chat Item failed:", error);
    }
  };

  return (
    <>
      <div className="px-5 w-full">
        <div className="my-20">
          <ChatItem token={token} />
          <div ref={bottomRef} />
        </div>
        <form className="fixed bottom-0 right-0 lg:left-80 w-full lg:w-auto bg-base-100">
          <label htmlFor="chat" className="sr-only">
            Message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-base-100">
            {/* EMOJI PICKER */}
            <div className="flex-none">
              <div className="dropdown dropdown-top">
                <label tabIndex={0} className="btn btn-ghost btn-circle pl-2">
                  <div>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
                      />
                    </svg>
                  </div>

                  <EmojiPicker
                    onChange={(e) => Field.onChange(`${field.value} ${e}`)}
                  />
                </label>
              </div>
            </div>
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
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
