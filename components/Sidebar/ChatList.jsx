"use client";

import { useEffect } from "react";
import ReadChatList from "./ReadChatList";
import UnReadChatList from "./UnReadChatList";
import axios from "axios";

export default function ChatList() {
  useEffect(() => {
    axios.get("/api/chats").then((res) => {
      if (res.data?.success) {
        console.log(res.data);
      }
    });
  });

  return (
    <>
      <UnReadChatList />
      <ReadChatList />
    </>
  );
}
