import HomeContainer from "@/containers/HomeContainer";
import ChatContainer from "@/containers/ChatContainer";
// import hasToken from "@/lib/hasToken";
import { store } from "@/stores";
import { fetchChats } from "@/stores/chat";

export default async function Home() {
    const { user } = store.getState().user
    if (!user?.username) return <HomeContainer />
    else {
        await store.dispatch(fetchChats());
        const chat = store.getState().chat;
        console.log(chat);
        return <ChatContainer />
    }
}