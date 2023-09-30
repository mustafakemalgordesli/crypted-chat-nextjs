import HomeContainer from "@/containers/HomeContainer";
import ChatContainer from "@/containers/ChatContainer";
// import hasToken from "@/lib/hasToken";
import { store } from "@/stores";
import { fetchUser } from "@/stores/user";

export default async function Home() {
    // await store.dispatch(fetchUser())
    // await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(true)
    //     }, 10000)
    // })
    // const { user } = store.getState().user
    return < ChatContainer />

    // const isToken = hasToken()
    // if (isToken) return <ChatContainer />
    // else return <HomeContainer />
}