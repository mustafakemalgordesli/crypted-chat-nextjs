import ReadChatList from './ReadChatList';
import UnReadChatList from './UnReadChatList';
import axios from 'axios';
import { store } from '@/stores';

export default function ChatList() {
    const chat = store.getState().chat;
    console.log(chat);
    return chat?.isLoading ? (
        <>
            <SkeletonComp />
            <SkeletonComp />
            <SkeletonComp />
        </>
    ) : (
        <>
            <UnReadChatList />
            <ReadChatList />
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
