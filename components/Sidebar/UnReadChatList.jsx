import Image from 'next/image';
import Link from 'next/link';

export default function UnReadChatList({ chats }) {
    return (
        //border-b border-gray-600
        <ul className="space-y-2 font-medium pb-2"></ul>
    );
}

const Item = ({ chat }) => {
    return (
        <li>
            <Link
                href="#"
                className="flex items-center text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
                <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                    <Image
                        height={32}
                        width={32}
                        className="w-8 h-8 rounded-full object-cover"
                        src="/1.jpg"
                        alt="user photo"
                    />
                </button>
                <div className="flex flex-col justify-between items-start overflow-hidden transition-all mr-2 px-2.5 py-0.5">
                    <h4 className="font-semibold text-gray-200">John Doe</h4>
                    {/* <span className="text-xs text-gray-600">
                        johndoe@gmail.com
                    </span> */}
                </div>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                </span>
            </Link>
        </li>
    );
};
