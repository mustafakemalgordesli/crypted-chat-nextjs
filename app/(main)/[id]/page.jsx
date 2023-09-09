import Chat from "@/components/Chat";
import MainNavbar from "@/components/Navbar/MainNavbar";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Navbar */}
          <MainNavbar />
          {/* chat content here */}
          <Chat />
        </div>
        {/* Sidebar content here */}
        <Sidebar />
      </div>
    </>
  );
};

export default page;
