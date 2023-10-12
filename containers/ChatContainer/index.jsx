import axios from 'axios';
import Chat from '@/components/Chat';
import MainNavbar from '@/components/Navbar/MainNavbar';
import StarterChat from '@/components/StarterChat';
import SecondaryNavbar from '@/components/Navbar/SecondaryNavbar';
import Sidebar from '@/components/Sidebar';
import { store } from '@/stores';
import { fetchChats } from '@/stores/chat';

const ChatContainer = () => {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <>
                        <SecondaryNavbar />
                        <StarterChat />
                    </> */}

                    <>
                        <MainNavbar />
                        <Chat />
                    </>
                </div>
                <Sidebar />
            </div>
        </>
    );
};

export default ChatContainer;
