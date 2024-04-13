import Sidebar from "../components/Sidebar";
import { MdModeEdit } from "react-icons/md";

const ProfilePage = () => {
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200">
      <Sidebar />
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Profile</h2>
        </div>
        <div className="rekap mt-8 bg-white h-4/5 rounded-xl drop-shadow-custom grid grid-flow-col grid-cols-2 py-6 pl-12 pr-6">
          <div className="left ">
            <div className="card-profile w-1/2 text-custom flex flex-col gap-2">
              <img src="profile.png" alt="" className="w-3/4 mb-5" />
              <div>
                <p className="font-normal">Username</p>
                <h4 className="text-2xl font-bold">John Doe</h4>
              </div>
              <div>
                <p className="font-normal">Email</p>
                <p className="font-bold">johndoe@gmail.com</p>
              </div>
              <div>
                <p className="font-normal">Password</p>
                <p className="font-bold">**********</p>
              </div>
              <div>
                <p className="font-normal">Nomor Telepon</p>
                <p className="font-bold">+6281633684836</p>
              </div>
            </div>
          </div>
          <div className="right grid grid-flow-col grid-cols-2">
            <div className="col-start-2 col-end-3 self-end justify-self-end">
              <div className="grid grid-flow-col gap-2 items-center py-2 bg-secondary rounded-lg text-white justify-center content-center p-6">
                <MdModeEdit size="1.1rem" />
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
