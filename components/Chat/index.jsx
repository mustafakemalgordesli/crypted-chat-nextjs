import Image from "next/image";
import EmojiPicker from "@/components/EmojiPicker";
import ChatList from "../ChatList";
import axios from "axios";
import CreateMessageForm from "../Forms/CreateMessageForm";

const Chat = () => {
  return (
    <>
      <div className="px-5 w-full h-full">
        <ChatList />
        <form className="fixed bottom-0 right-0 lg:left-80 w-full lg:w-auto bg-base-100">
          <label htmlFor="chat" className="sr-only">
            Message
          </label>
          <div className="flex items-center px-3 py-2 rounded-lg bg-base-100">
            <EmojiPicker />
            <CreateMessageForm />
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
