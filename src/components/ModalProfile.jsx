import { AiOutlineCloseSquare } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";
const ModalBox = (props) => {
  const { modal, HandlerEditProfile } = props;
  if (!modal) {
    return null;
  }
  return (
    <div className="fixed bg-white border-solid border-2 border-secondary rounded-lg drop-shadow-custom z-50 inset-x-38/100 inset-y-1/4">
      <div className="header flex justify-between py-2 w-11/12 m-auto items-center">
        <h3 className="font-semibold text-xl text-custom">Edit Data Admin</h3>
        <AiOutlineCloseSquare
          size={"1.5rem"}
          className="text-custom"
          onClick={HandlerEditProfile}
        />
      </div>
      <div className="profile m-5">
        <div className="">
          <div className="upload-image w-28 h-28 relative m-auto">
            <img
              src="profile.png"
              alt="profile user"
              className="object-cover rounded-full "
            />
            <CiCamera
              size={"2rem"}
              className="absolute left-full top-full z-50 bg-green-500 rounded-full p-1.5 -translate-x-full -translate-y-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBox;
