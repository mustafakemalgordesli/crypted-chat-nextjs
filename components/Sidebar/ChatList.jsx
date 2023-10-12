// import ReadChatList from './ReadChatList';
// import UnReadChatList from './UnReadChatList';
import { store } from '@/stores';
import Link from 'next/link';
import Image from 'next/image';

export default function ChatList() {
    const { chats, isLoading } = store.getState().chat;

    return isLoading ? (
        <>
            <SkeletonComp />
            <SkeletonComp />
            <SkeletonComp />
        </>
    ) : (
        <>
            {/* <UnReadChatList chats={chats?.unreadChats} />
            <ReadChatList chats={chats?.readChats} /> */}
            {chats?.unreadChats?.map((element) => (
                <Item chat={element} key={element?.id} />
            ))}
            {chats?.readChats?.map((element) => (
                <Item chat={element} key={element?.id} />
            ))}
        </>
    );
}

const SkeletonComp = () => {
    return (
        <li>
            <div role="status" className="max-w-sm animate-pulse">
                <div className="bg-gray-200 rounded-full dark:bg-gray-700 w-8 h-8"></div>
                <div className="flex flex-col gap-2 ml-2">
                    <div className="bg-gray-200 rounded dark:bg-gray-700 w-40 h-4"></div>
                    <div className="bg-gray-200 rounded dark:bg-gray-700 w-40 h-2"></div>
                </div>
            </div>
        </li>
    );
};

const Item = ({ chat }) => {
    const imageService = process.env.IMAGE_SERVICE;
    const { user } = store.getState().user;
    console.log(user);
    const otherUser =
        user?.username === chat?.userOne?.username
            ? chat.userTwo
            : chat.userOne;
    console.log(otherUser);
    return (
        <li>
            <button className="flex items-center text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <div
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                    <Image
                        height={32}
                        width={32}
                        className="w-8 h-8 rounded-full object-cover"
                        src={
                            otherUser?.photoUrl
                                ? imageService + otherUser?.photoUrl
                                : `/1.jpg`
                        }
                        alt="user photo"
                    />
                </div>
                <div className="flex flex-col justify-between items-start overflow-hidden transition-all mr-2 px-2.5 py-0.5">
                    <h4 className="font-semibold text-gray-200">
                        {otherUser?.username}
                    </h4>
                    <span className="text-xs text-gray-600">
                        {otherUser?.email}
                    </span>
                </div>
                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-auto mr-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                </span> */}
            </button>
        </li>
    );
};
