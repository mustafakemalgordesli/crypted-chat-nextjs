import HomeContainer from "@/containers/HomeContainer";
import ChatContainer from "@/containers/ChatContainer";
// import hasToken from "@/lib/hasToken";
import { store } from "@/stores";
import { fetchUser } from "@/stores/user";
import { fetchChats } from "@/stores/chat";

export default async function Home() {
    await store.dispatch(fetchUser())
    const { user } = store.getState().user
    console.log(user)
    if (!user?.username) return <HomeContainer />
    else {
        await store.dispatch(fetchChats());
        const chat = store.getState().chat;
        console.log(chat);
        return <ChatContainer />
    }
}