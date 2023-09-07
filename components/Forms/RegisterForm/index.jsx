import Link from "next/link";

const index = () => {

  // const router = useRouter()
  // const [data, setData] = useState({
  //   username: '',
  //   email: '',
  //   password: ''
  // })

  // const registerUser = async (e) => {
  //   e.preventDefault()
  //   const response = await fetch('/api/register', {
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({data})
  //   })

  //   const userInfo = await response.json()
  //   console.log(userInfo)
  //   router.push("/login")
  // }

  return (
    <div className="border border-gray-500 rounded-lg px-24 py-4 shadow-xl">
      <div>
        <h1 className="text-gray-300 mb-4 font-semibold text-2xl">
          Create an account
        </h1>
      </div>
      <form>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            // name="username"
            // value={data.username}
            // onChange={(e) => {setData({...data, username: e.target.value})}}
            className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your email
          </label>
          <input
            type="email"
            // name="email"
            // value={data.email}
            // onChange={(e) => {setData({...data, email: e.target.value})}}
            className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Your password
          </label>
          <input
            type="password"
            // name="password"
            // value={data.password}
            // onChange={(e) => {setData({...data, password: e.target.value})}}
            className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            className="bg-transparent border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button type="submit" className="btn btn-block">
          Register
        </button>
        <div className="mt-4">
          <p>
            Already have an account?
            <Link href="/login" className="link link-info link-hover pl-1">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default index;
