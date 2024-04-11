import logo from "./../assets/logo.png";
import { useState } from "react";
import { Home, Logout, Message, Paper, User, CloseSquare } from "react-iconly";
const Sidebar = () => {
    const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState("masuk");
  const [togle, setTogle] = useState(false);
  const handlerCurrent = (menu) => {
    setCurrent(menu);
  };

  const handlerPersuratan = (menu) => {
    setOpen(menu);
  };

  const handlerTogglePersuratan = () => {
    setTogle((prev) => !prev);
  };
  return (
    <div className="sidebar col-span-1 grid grid-rows-8 bg-white drop-shadow-custom font-sans">
      <div className="title row-span-1 grid grid-cols-8 items-center mx-6">
        <img src={logo} alt="" className=" col-span-2" />
        <h3 className="col-start-3 col-end-9 font-bold text-base justify-self-center tracking-wide">
          ATR/BPN JEMBER
        </h3>
      </div>
      <div className="menu row-start-3 row-end-8 mx-6">
        <ul>
          <li
            onClick={() => handlerCurrent("beranda")}
            className={`${
              current == "beranda" ? "bg-slate-500 rounded-lg text-white" : null
            } hover:cursor-pointer py-3 flex gap-3 items-center font-medium text-base px-3`}
          >
            <Home />
            <p>Beranda</p>
          </li>
          <li
            className={`${
              current == "persuratan"
                ? "bg-slate-500 rounded-lg text-white"
                : null
            } hover:cursor-pointer py-3 gap-3 items-center font-medium text-base px-3 grid grid-flow-row grid-cols-4`}
          >
            <div
              className="left flex gap-3 col-start-1 col-end-4 justify-self-start"
              onClick={() => handlerCurrent("persuratan")}
            >
              <Message />
              <p>Persuratan</p>
            </div>
            <div className="righ justify-self-end col-col-start-4 col-end-5">
              <CloseSquare onClick={() => handlerTogglePersuratan()} />
            </div>
            <div
              className={`sub-menu col-start-1 col-end-5 ${
                togle && current == "persuratan" ? "block" : "hidden"
              }`}
            >
              <ol className="list-disc list-inside">
                <li
                  className={`${
                    open == "masuk" ? "bg-white text-slate-950" : ""
                  } py-1 px-5 rounded-md`}
                  onClick={() => handlerPersuratan("masuk")}
                >
                  Surat Masuk
                </li>
                <li
                  className={`${
                    open == "balasan" ? "bg-white text-slate-950" : ""
                  } py-1 px-5 rounded-md`}
                  onClick={() => handlerPersuratan("balasan")}
                >
                  Balasan Surat
                </li>
              </ol>
            </div>
          </li>
          <li
            onClick={() => handlerCurrent("rekap")}
            className={`${
              current == "rekap" ? "bg-slate-500 rounded-lg text-white" : null
            } hover:cursor-pointer py-3 flex gap-3 items-center font-medium text-base px-3`}
          >
            <Paper />
            <p>Rekap Surat</p>
          </li>
          <li
            onClick={() => handlerCurrent("user")}
            className={`${
              current == "user" ? "bg-slate-500 rounded-lg text-white" : null
            } hover:cursor-pointer py-3 flex gap-3 items-center font-medium text-base px-3`}
          >
            <User />
            <p>Manajemen User</p>
          </li>
        </ul>
      </div>
      <div className="account row-span-8 flex justify-between items-center mx-8">
        <div className="status">
          <h4 className="font-bold text-base">ADMIN ATR/BPN</h4>
          <p className="text-sm">admin123@gmail.com</p>
        </div>
        <div className="logout">
          <Logout size="1.5em" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;