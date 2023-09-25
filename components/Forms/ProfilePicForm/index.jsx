"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";

export default function ProfilePictureForm({ imageService, token }) {
  const [user, SetUser] = useState(null);
  useEffect(() => {
    SetUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    axios
      .post("/api/users/profilepic", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data?.success) {
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          SetUser(res.data?.user);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mt-3 mb-3">
      <div className="h-[165px] w-[165px]">
        <div className={styles.profilePic}>
          <label className={styles.labelComp} htmlFor="file">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              className="fill-white"
            >
              <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
            </svg>

            <span className="text-white">Change Image</span>
          </label>
          <input
            id="file"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={loadFile}
          />
          <Image
            src={user?.photoUrl ? imageService + user?.photoUrl : `/1.jpg`}
            // src={user?.photoUrl ? imageService + user?.photoUrl : `/12.jpg`}
            id="output"
            className={`${styles.profileImage}`}
            width={165}
            height={165}
            alt="profile image"
          />
        </div>
      </div>
    </div>
  );
}
