import logo from "../assets/logo.png";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { useState } from "react";

const DashboardPage = () => {
  const [current, setCurrent] = useState(null);
  const handlerCurrent = (menu) =>{
    setCurrent(menu)
  }
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200">
      <div className="sidebar col-span-1 grid grid-rows-8 bg-white drop-shadow-custom">
        <div className="title row-span-1 grid grid-cols-8 items-center mx-6">
          <img src={logo} alt="" className=" col-span-2" />
          <h3 className="col-start-3 col-end-9 font-bold text-lg justify-self-end tracking-wide">
            ATR/BPN JEMBER
          </h3>
        </div>
        <div className="menu row-start-3 row-end-8 mx-6">
          <ul>
            <li onClick={() => handlerCurrent('beranda')} className={`${current == 'beranda' ? 'bg-slate-500 rounded-lg text-white' : null} hover:cursor-pointer py-3 flex gap-2 items-center font-semibold text-lg pl-3`}>
              <FaHome />
              <p>Beranda</p>
            </li>
            <li onClick={() => handlerCurrent('persuratan')} className={`${current == 'persuratan' ? 'bg-slate-500 rounded-lg text-white' : null} hover:cursor-pointer py-3 flex gap-2 items-center font-semibold text-lg pl-3`}>
              <FaRegEnvelope />
              <p>Persuratan</p>
            </li>
            <li onClick={() => handlerCurrent('rekap')} className={`${current == 'rekap' ? 'bg-slate-500 rounded-lg text-white' : null} hover:cursor-pointer py-3 flex gap-2 items-center font-semibold text-lg pl-3`}>
              <FaClipboardList />
              <p>Rekap Surat</p>
            </li>
            <li onClick={() => handlerCurrent('user')} className={`${current == 'user' ? 'bg-slate-500 rounded-lg text-white' : null} hover:cursor-pointer py-3 flex gap-2 items-center font-semibold text-lg pl-3`}>
              <FaUser />
              <p>Manajemen User</p>
            </li>
          </ul>
        </div>
        <div className="account row-span-8 flex justify-between items-center mx-8">
          <div className="status">
            <h4 className="font-bold text-base">ADMIN ATR/BPN</h4>
            <p className="text-sm">usertest123@gmail.com</p>
          </div>
          <div className="logout">
            <AiOutlineLogout size="1.5em" />
          </div>
        </div>
      </div>
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar flex justify-between pt-5">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <select id="month" className="pr-6 font-normal outline-none">
            <option value="volvo">Bulan Ini</option>
            <option value="saab">April</option>
            <option value="opel">Mei</option>
            <option value="audi">Juni</option>
          </select>
        </div>
        <div className="rekap grid gap-10 grid-flow-col grid-cols-4 mt-8">
            <div className="masuk h-32 bg-white rounded-lg drop-shadow-custom"></div>
            <div className="disposisi h-32 bg-white rounded-lg drop-shadow-custom"></div>
            <div className="belum-ditindaklanjuti h-32 bg-white rounded-lg drop-shadow-custom"></div>
            <div className="sudah-ditindaklanjuti h-32 bg-white rounded-lg drop-shadow-custom"></div>
        </div>
        <div className="rekap mt-8 bg-white h-3/5 rounded-lg drop-shadow-custom"></div>
      </div>
    </main>
  );
};

export default DashboardPage;
