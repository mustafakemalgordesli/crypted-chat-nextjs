import { cookies } from "next/headers";

export default function getToken() {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;
    return token
}