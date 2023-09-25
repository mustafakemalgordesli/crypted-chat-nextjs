"use client";

import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Loading from "@/app/loading";

import Chat from "@/components/Chat";
import MainNavbar from "@/components/Navbar/MainNavbar";
import StarterChat from "@/components/StarterChat";
import SecondaryNavbar from "@/components/Navbar/SecondaryNavbar";
import Sidebar from '@/components/Sidebar'

const ChatContainer = ({token}) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState("starter");


  // const toggleVariant = useCallback(() => {
  //   setVariant((currentVariant) =>
  //     currentVariant === "starter" ? "chat" : "starter"
  //   );
  // }, []);

  const apiUrl = "http://localhost:3000/api/chats/";

  useEffect(() => {
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    axios
      .get(apiUrl, { headers })
      .then((response) => {
        setData(response.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {variant === "starter" ? 
          <>
          
          <SecondaryNavbar />
          <StarterChat />
          </>
            : 
            <>
            <MainNavbar />
            <Chat token={token} loading={loading} setLoading={setLoading}/>
          </>
            }
        </div>
        <Sidebar data={data} variant={variant}/>
      </div>
      {/* <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Navbar
          <MainNavbar />
          {/* chat content here
          <Chat token={token} loading={loading} />
        </div>
        {/* Sidebar content here
        <Sidebar />
      </div> */}

    </>
  )
}

export default ChatContainer