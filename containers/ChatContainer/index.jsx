import axios from "axios";
import Chat from "@/components/Chat";
import MainNavbar from "@/components/Navbar/MainNavbar";
import StarterChat from "@/components/StarterChat";
import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar";
import Sidebar from "@/components/Sidebar";
import hasToken from "@/lib/hasToken";

const ChatContainer = () => {
  const isToken = hasToken();

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {!isToken ? (
            <>
              <SecondaryNavbar />
              <StarterChat />
            </>
          ) : (
            <>
              <MainNavbar />
              {/* <Chat token={token} loading={loading} setLoading={setLoading} /> */}
            </>
          )}
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default ChatContainer;
