import Image from "next/image";
import React from "react";
import ProfilePictureForm from "@/components/Forms/ProfilePicForm";
import { cookies } from "next/headers";
import UsernameEditForm from "@/components/Forms/UsernameEditForm";

// needs to be fixed!!!!!!!!!!!!!!

const page = () => {
  const imageService = process.env.IMAGE_SERVICE;
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken");
  console.log(token);
  return (
    <div className="max-w-screen-md mx-auto h-screen pt-20">
      <div>
        <div className="overflow-x-auto">
          <table className="table rounded-xl border border-gray-600 dark:border-gray-800">
            {/* head */}
            <thead>
              <tr>
                <th className="flex flex-row w-full justify-between items-center">
                  <ProfilePictureForm
                    imageService={imageService}
                    token={token}
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="h-[65px]">
                <UsernameEditForm />
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold uppercase opacity-50">
                        Email
                      </div>
                      <div className="text-sm">faya@gmail.com</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-sm">edit</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold opacity-50">Password</div>
                      <div className="text-sm ">************</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-sm">edit</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
