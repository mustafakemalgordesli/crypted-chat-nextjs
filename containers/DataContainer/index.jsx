// import Some from "@/components/Some";
// import axios from "axios";

// const getData = async () => {
//   const url = 'http://localhost:3000/api/chats/'

//   const headers = {
//     Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozNCwidXNlcm5hbWUiOiJ1c2VydHdvIiwiZW1haWwiOiJ1c2VydHdvQGdtYWlsLmNvbSJ9LCJpYXQiOjE2OTQ1MDcxNDcsImV4cCI6MTY5NzA5OTE0N30.kbkVFcogLZyixQdmJZUg4pZlFw09419M-fEuyHOGqpk",
//     "Content-Type": "application/json",
//   };

// //   const res = await axios.get(url, headers).then(res => res.json())

// //   if (!res.ok) {
// //     return null
// // }

// // const data = await res.json()

// // if (data.status === 401) {
// //   return null
// // }

// // if (!data.success) {
// //   return null
// // }


// // return data.readChats


// try {
//   const response = await axios.get(url, headers);

//   console.log('Response data:', response.data?.data);
//   // Handle the response data as needed
// } catch (error) {
//   console.error('Error fetching data:', error);
//   // Handle the error
// }
// };

// // Call the fetchData function when the component mounts or wherever needed
// fetchData();

// export default async function DataContainer(){

//   const chatData = fetchData()

//   const [chatItemData] = await Promise.all([chatData])

//   return (
//     <>
//     {
//       chatItemData && <Some ItemData={chatItemData}/>
//     }
//     </>
//     )
// }