"use client";

import React, { useEffect, useState, useRef } from "react";
import ChatLoading from "../Loading/ChatLoading";

const ChatList = () => {
  const [data, setData] = useState([]);
  const bottomRef = useRef(null);
  const [loading] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="py-20 h-full">
      {loading ? (
        <ChatLoading />
      ) : (
        // data?.readChats?.map((item) => (
        <>
          <div className="chat chat-start">
            {/* <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image src="/1.jpg" alt="" width={40} height={40} />
                  </div>
                </div> */}
            <div className="chat-header">
              {/* {item.userTwoUsername} */}
              username
              <time className="text-xs opacity-50 pl-2">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
          </div>
          <div className="chat chat-end">
            {/* <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image src="/1.jpg" alt="" width={40} height={40} />
                  </div>
                </div> */}
            <div className="chat-header">
              Username
              <time className="text-xs opacity-50 pl-2">12:07:23</time>
            </div>

            <div className="chat-bubble mb-2">deneme</div>
            <div className="chat-bubble mb-2">deneme2</div>

            {/* <div className="chat-header">
                  {item.userOneUsername}
                  <time className="text-xs opacity-50 pl-2">
                    {item?.createdAt.split("T")[1].split(".")[0]}
                  </time>
                </div>
                {item?.ChatItems?.map((msg) => (
                  <div className="chat-bubble mb-2" key={msg.id}>
                    {msg?.message}
                  </div>
                ))} */}
            {/* <div className="chat-footer opacity-50">Seen at 12:46</div> */}
          </div>
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <Comp />
          <div ref={bottomRef} />
        </>
        // ))
      )}
    </div>
  );
};

export default ChatList;

const Comp = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-header">
          {/* {item.userTwoUsername} */}
          username
          <time className="text-xs opacity-50 pl-2">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-header">
          Username
          <time className="text-xs opacity-50 pl-2">12:07:23</time>
        </div>

        <div className="chat-bubble mb-2">deneme</div>
        <div className="chat-bubble mb-2">deneme2</div>
      </div>
    </>
  );
};
