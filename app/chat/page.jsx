import ChatContainer from "@/containers/ChatContainer";
import { cookies } from "next/headers";


const ChatHomePage = () => {

  const cookieStore = cookies();

  const token = cookieStore.get("accessToken");

  const tokenValue = token?.value;

  return (
    <>
      <ChatContainer/>
    </>
  );
};

export default ChatHomePage;
