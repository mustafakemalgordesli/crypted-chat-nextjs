'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function UserInfo() {
    const { user } = useSelector((state) => state.user);

    return (
        <div className="flex items-center p-2 text-gray-900 transition duration-75 group">
            <div className="flex text-sm bg-gray-800 rounded-full md:mr-0">
                <div className="chat-image avatar">
                    <div className="w-8 rounded-full">
                        <Image
                            alt=""
                            width={32}
                            height={32}
                            src={
                                user?.photoUrl
                                    ? imageService + user?.photoUrl
                                    : `/1.jpg`
                            }
                            className="rounded-full object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full justify-between items-center overflow-hidden transition-all mr-2 px-2.5 py-0.5">
                <h4 className="font-semibold text-gray-200">{user.username}</h4>
            </div>

            <div className="dropdown dropdown-top">
                <label
                    tabIndex={0}
                    className="btn rotate-90 text-xl font-bold self-center rounded-full "
                >
                    ...
                </label>
                <ul
                    tabIndex={0}
                    className="dropdown-content z-[9999] menu p-2 shadow bg-base-100 rounded-box w-40 text-gray-600"
                >
                    <li>
                        <Link href="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link href="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
