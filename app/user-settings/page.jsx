import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-screen-md mx-auto h-screen pt-20">
      <div>
        <div className="overflow-x-auto">
          <table className="table rounded-xl border border-gray-200 dark:border-gray-800">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src="/1.jpg" alt="Avatar" width={48} height={48} />
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold uppercase opacity-50">
                        Username
                      </div>
                      <div className="text-sm">faya</div>
                    </div>
                  </div>
                </td>
                <td></td>
                <th>
                  <button className="btn btn-ghost btn-sm">Edit</button>
                </th>
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