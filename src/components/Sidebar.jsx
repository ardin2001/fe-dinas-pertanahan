import logo from "./../assets/logo.png";
import { useState } from "react";
import { GoHome } from "react-icons/go";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Sidebar = () => {
  const location = useLocation();
  const [togle, setTogle] = useState(false);

  useEffect(() => {
    if (
      location.pathname == "/surat-masuk" ||
      location.pathname == "/balasan-surat" || location.pathname == "/surat-masuk/disposisi-surat"
    ) {
      setTogle((prev) => !prev);
    }
  }, []);

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
            className={`${
              location.pathname == "/dashboard"
                ? "bg-secondary rounded-lg text-white"
                : null
            } hover:cursor-pointer`}
          >
            <Link
              to={"/dashboard"}
              className="py-3 flex gap-3 items-center font-medium text-base px-3"
            >
              <GoHome size="1.5rem" />
              <p
                className={`${
                  location.pathname == "/dashboard"
                    ? "text-white"
                    : "text-custom"
                } font-bold`}
              >
                Beranda
              </p>
            </Link>
          </li>
          <li
            onClick={handlerTogglePersuratan}
            className={`${
              location.pathname == "/persuratan"
                ? "bg-secondary rounded-lg text-white"
                : null
            } hover:cursor-pointer py-3 grid grid-cols-4 gap-3 items-center font-medium text-base px-3 justify-between`}
          >
            <div className="left flex gap-3 col-start-1 col-end-4 justify-self-start">
              <SlEnvolopeLetter size="1.4rem" />
              <p className="text-custom font-bold">Persuratan</p>
            </div>
            <div className="right justify-self-end col-col-start-4 col-end-5">
              {togle ? (
                <FaChevronUp size="1rem" />
              ) : (
                <FaChevronDown size="1rem" />
              )}
            </div>
            <div
              className={`sub-menu col-start-1 col-end-5 ${
                togle ? "block" : "hidden"
              }`}
            >
              <ol className="list-disc list-inside ">
                <Link to={"/surat-masuk"}>
                  <li
                    className={`${
                      location.pathname == "/surat-masuk"
                        ? "bg-secondary text-white text-base"
                        : "text-custom font-bold"
                    } py-2 px-5 rounded-md`}
                  >
                    Surat Masuk
                  </li>
                </Link>
                <Link to={"/balasan-surat"}>
                  <li
                    className={`${
                      location.pathname == "/balasan-surat"
                        ? "bg-secondary text-white text-base"
                        : "text-custom font-bold"
                    } py-2 px-5 rounded-md`}
                  >
                    Balasan Surat
                  </li>
                </Link>
              </ol>
            </div>
          </li>
          <li
            className={`${
              location.pathname == "/rekap-surat"
                ? "bg-secondary rounded-lg text-white"
                : null
            } hover:cursor-pointer`}
          >
            <Link
              to={"/rekap-surat"}
              className="py-3 flex gap-3 items-center font-medium text-base px-3"
            >
              <CiViewList size="1.5rem" />
              <p
                className={`${
                  location.pathname == "/rekap-surat"
                    ? "text-white"
                    : "text-custom"
                } font-bold`}
              >
                Rekap Surat
              </p>
            </Link>
          </li>
          <li
            className={`${
              location.pathname == "/manajemen-user"
                ? "bg-secondary rounded-lg text-white"
                : null
            } hover:cursor-pointer`}
          >
            <Link
              to={"/manajemen-user"}
              className="hover:cursor-pointer py-3 flex gap-3 items-center font-medium text-base px-3"
            >
              <CiUser size="1.5rem" />
              <p
                className={`${
                  location.pathname == "/manajemen-user"
                    ? "text-white"
                    : "text-custom"
                } font-bold`}
              >
                Manajemen User
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="account row-span-8 grid">
        <div className="grid items-center">
          <div
            className={` ${
              location.pathname == "/profile" ? "bg-secondary text-white" : null
            } flex justify-between items-center mx-8 py-2 px-6 rounded-lg`}
          >
            <Link to={"/profile"}>
              <div className="status">
                <h4 className="font-bold text-sm">ADMIN ATR/BPN</h4>
                <p className="text-xs">admin123@gmail.com</p>
              </div>
            </Link>
            <div className="logout">
              <HiOutlineLogout size="1.5rem" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
