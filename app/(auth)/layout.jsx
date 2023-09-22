import Link from "next/link";
import Image from "next/image";

const AuthLayout = ({ children }) => {
  return (
    <div className="w-full h-full">
      <div className="w-full flex justify-center pl-0 md:pl-10 md:justify-start p-6 items-center">
        <Link className="text-xl font-bold flex flex-row" href="/">
          <Image
            className="mr-2"
            src="/1.jpg"
            alt="logo"
            width={36}
            height={36}
          />
          Crypted-Chat
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100%-4.75rem)]">
        <div className="border border-gray-500 rounded-lg px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 shadow-xl py-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
