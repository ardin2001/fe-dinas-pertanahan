import { AiOutlineCloseSquare } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { CiCamera } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";
const ModalBox = (props) => {
  const [password, setPassword] = useState(false);
  const [repassword, setRepassword] = useState(false);
  const { modal, HandlerEditProfile } = props;
  const HandlerPassword = () => {
    setPassword((prev) => !prev);
  };
  const HandlerRepssword = () => {
    setRepassword((prev) => !prev);
  };
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-38/100 inset-y-1/10">
      <div className="header flex justify-between py-2.5 w-10/12 m-auto items-center">
        <h3 className="font-semibold text-xl text-custom">Edit Data Admin</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerEditProfile}
        />
      </div>
      <div className="profile m-6">
        <div className="">
          <div className="upload-image relative m-auto w-max">
            <img
              src="profile.png"
              alt="profile user"
              className=" rounded-full w-36 h-36 object-cover"
            />
            <CiCamera
              size={"2rem"}
              className="absolute left-full top-full z-50 bg-green-500 rounded-full p-1.5 -translate-x-full -translate-y-full"
            />
          </div>
        </div>
      </div>
      <div className="input w-10/12 m-auto grid gap-3">
        <div className="fullname relative">
          <FaRegUser className="absolute top-1/2 left-2.5 -translate-y-1/2" />
          <input
            type="text"
            className="outline-none border-2 border-secondary w-full py-2.5 px-8 text-xs text-custom rounded-md"
            placeholder="Nama Lengkap"
          />
        </div>
        <div className="fullname relative ">
          <CiMail className="absolute top-1/2 left-2.5 -translate-y-1/2" />
          <input
            type="text"
            className="outline-none border-2 border-secondary w-full py-2.5 px-8 text-xs text-custom rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="password relative ">
          <CiLock className="absolute top-1/2 left-2.5 -translate-y-1/2" />
          <input
            type={password ? "text" : "password"}
            className="outline-none border-2 border-secondary w-full py-2.5 px-8 text-xs text-custom rounded-md"
            placeholder="Kata Sandi"
          />
          {password ? (
            <FaEyeSlash
              className="absolute top-1/2 right-2.5 -translate-y-1/2"
              onClick={HandlerPassword}
            />
          ) : (
            <FaEye
              className="absolute top-1/2 right-2.5 -translate-y-1/2"
              onClick={HandlerPassword}
            />
          )}
        </div>
        <div className="repassword relative ">
          <CiLock className="absolute top-1/2 left-2.5 -translate-y-1/2" />
          <input
            type={repassword ? "text" : "password"}
            className="outline-none border-2 border-secondary w-full py-2.5 px-8 text-xs text-custom rounded-md"
            placeholder="KonfimasiKata Sandi"
          />
          {repassword ? (
            <FaEyeSlash
              className="absolute top-1/2 right-2.5 -translate-y-1/2"
              onClick={HandlerRepssword}
            />
          ) : (
            <FaEye
              className="absolute top-1/2 right-2.5 -translate-y-1/2"
              onClick={HandlerRepssword}
            />
          )}
        </div>
        <div className="fullname relative ">
          <BsTelephone className="absolute top-1/2 left-2.5 -translate-y-1/2" />
          <input
            type="text"
            className="outline-none border-2 border-secondary w-full py-2.5 px-8 text-xs text-custom rounded-md"
            placeholder="Nomor Telephone"
          />
        </div>
        <div className="button grid gap-8 grid-flow-col text-white font-semibold text-center">
          <div className="grid grid-flow-col gap-2 items-center py-2 bg-red-500 rounded-lg">
            <p>Batal</p>
          </div>
          <div className="grid grid-flow-col gap-2 items-center py-2 bg-secondary rounded-lg">
            <p>Simpan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
