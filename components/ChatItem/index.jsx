"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatItem = ({ token }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = "http://localhost:3000/api/chats/";

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading
        ? "loading..."
        : data?.readChats?.map((item) => (
            <div key={item}>
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image src="/1.jpg" alt="" width={40} height={40} />
                  </div>
                </div>
                <div className="chat-header">
                  {item.userTwoUsername}
                  <time className="text-xs opacity-50 pl-2">12:46</time>
                </div>
                <div className="chat-bubble">I hate you!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image src="/1.jpg" alt="" width={40} height={40} />
                  </div>
                </div>
                <div className="chat-header">
                  {item.userOneUsername}
                  <time className="text-xs opacity-50 pl-2">
                    {item?.createdAt.split("T")[1].split(".")[0]}
                  </time>
                </div>
                {item?.ChatItems?.map((msg) => (
                  <div className="chat-bubble mb-2" key={msg.id}>
                    {msg?.message}
                  </div>
                ))}
                {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
              </div>
            </div>
          ))}
    </div>
  );
};

export default ChatItem;
