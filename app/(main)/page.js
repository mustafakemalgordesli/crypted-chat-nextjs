import StarterChat from "@/components/StarterChat";
import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Navbar */}
          <SecondaryNavbar />
          {/* chat content here */}
          <StarterChat />
        </div>
        {/* Sidebar content here */}
        <Sidebar />
      </div>
    </>
  )
}