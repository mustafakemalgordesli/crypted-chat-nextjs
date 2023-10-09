import HomeContainer from "@/containers/HomeContainer";
import ChatContainer from "@/containers/ChatContainer";
// import hasToken from "@/lib/hasToken";
import { store } from "@/stores";
import { fetchUser } from "@/stores/user";
import { fetchChats } from "@/stores/chat";

export default async function Home() {
    await store.dispatch(fetchUser())
    const { user } = store.getState().user
    if (!user) return <HomeContainer />
    // await store.dispatch(fetchChats())
    return <ChatContainer />
}