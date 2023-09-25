import Chat from "@/components/Chat";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";

const page = () => {
  const cookieStore = cookies();

  const token = cookieStore.get("accessToken");

  const tokenValue = token?.value;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Navbar */}
          <MainNavbar />
          {/* chat content here */}
          <Chat/>
        </div>
        {/* Sidebar content here */}
        <Sidebar />
      </div>
    </>
  );
};

export default page;
