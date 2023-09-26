import HomeContainer from "@/containers/HomeContainer";
import ChatContainer from "@/containers/ChatContainer";
import hasToken from "@/lib/hasToken";

export default function Home() {
    const isToken = hasToken()
    if (isToken) return <ChatContainer />
    else return <HomeContainer />
}