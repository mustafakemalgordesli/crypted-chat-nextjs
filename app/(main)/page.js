import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full">
        <div className="hero min-h-screen bg-slate-800">
          <div className="absolute top-0 left-0 flex flex-row justify-between items-center w-full p-8">
            <Link className="text-xl font-bold" href="/">Crypted-Chat</Link>
            <div className="">
              <Link href="/" className="link link-hover mr-4">
                [ Source ]
              </Link>
              <Link href="/" className="link link-hover mr-4">
                [ About Us ]
              </Link>
              <Link href="/" className="link link-hover">
                [ Contact ]
              </Link>
            </div>
            <div>
              <Link href="/register">
                <button className="btn btn-sm btn-outline rounded-3xl px-6 py-2">
                  Join
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card md:h-72 w-96 border border-slate-400 shadow-xl">
              <div className="card-body fex- flex-col h-full justify-between items-stretch">
                <h2 className="card-title">Crypted Chats, One Click Away!</h2>
                <button className="btn btn-outline rounded-3xl px-6 py-2 my-4">
                  Became a Member
                </button>
                <div className="card-actions justify-end">
                  <button className="btn btn-circle btn-outline">
                    <span className="-rotate-45">→</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h1 className="text-5xl font-semibold uppercase">
                a crypted and creative chat application for everybody.
              </h1>
            </div>
          </div>
          <div className="absolute bottom-0 p-4 w-96 break-words">
            {/* md:pl-16 left-0 */}
            <p className="">
              ✦ Provident cupiditate voluptatem et in. Quaerat fugiat ut
              assumenda excepturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi. ✦
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
