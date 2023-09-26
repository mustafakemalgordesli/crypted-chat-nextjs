import { cookies } from "next/headers";

export default function hasToken() {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken");
    if (token) return true
    return false
}