import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { MdModeEdit } from "react-icons/md";
import ModalProfile from "../../components/modal/ModalProfile";
import { CiUser } from "react-icons/ci";
import { GetDetailMnagemenUser } from "../../utils/FetchmanagemenUser";
import UseAuth from "../../hooks/UseAuth";

const ProfilePage = () => {
  const auth = UseAuth();
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({});
  
  useEffect(() => {
    GetDetailMnagemenUser(auth.id).then((res) => {
      setUser(res.data);
    });
  });
  const HandlerEditProfile = () => {
    setModal((prev) => !prev);
  };
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200">
      <ModalProfile modal={modal} HandlerEditProfile={HandlerEditProfile} />
      <Sidebar modal={modal} />
      <div
        className={`content col-start-2 col-end-6 w-97/100 ${
          modal ? "blur-sm" : null
        }`}
      >
        <div className="navbar pt-5">
          <h2 className="font-bold text-2xl">Profile</h2>
        </div>
        <div className="rekap mt-8 bg-white h-4/5 rounded-xl drop-shadow-custom grid grid-flow-col grid-cols-2 py-6 pl-12 pr-6">
          <div className="left ">
            <div className="card-profile w-1/2 text-custom flex flex-col gap-2">
              <CiUser className="w-3/4 m-5 h-full border-2 rounded-lg border-primary" />
              <div>
                <p className="font-normal">Name</p>
                <h4 className="text-2xl font-bold">{user?.name}</h4>
              </div>
              <div>
                <p className="font-normal">Email</p>
                <p className="font-bold">{user?.email}</p>
              </div>
              <div>
                <p className="font-normal">Role</p>
                <p className="font-bold">{user?.type}</p>
              </div>
              <div>
                <p className="font-normal">Nomor Telepon</p>
                <p className="font-bold">+6281633684836</p>
              </div>
            </div>
          </div>
          <div
            className={`${
              auth == "admin" ? "grid" : "hidden"
            } right grid-flow-col grid-cols-2`}
          >
            <div
              className="col-start-2 col-end-3 self-end justify-self-end"
              onClick={HandlerEditProfile}
            >
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
