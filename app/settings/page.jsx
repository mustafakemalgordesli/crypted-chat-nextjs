import ProfilePictureForm from "@/components/Forms/ProfilePicForm";
import UsernameEditForm from "@/components/Forms/UsernameEditForm";
import EmailEditForm from "@/components/Forms/EmailEditForm";

const page = () => {
  const imageService = process.env.IMAGE_SERVICE;
  return (
    <div className="max-w-screen-md mx-auto h-screen pt-20">
      <div>
        <div className="overflow-x-auto">
          <div className="rounded-xl border border-gray-600 dark:border-gray-800">
            <div className="flex flex-row w-full justify-between items-center border-b border-black px-4">
              <ProfilePictureForm imageService={imageService} token={token} />
            </div>
            <div>
              <UsernameEditForm />

              <EmailEditForm />

              {/* <tr>
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
              </tr> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
