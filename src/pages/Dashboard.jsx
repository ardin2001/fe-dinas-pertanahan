import { Message, } from "react-iconly";
import Sidebar from "../components/Sidebar";
import CardDashboard from "../components/CardDashboard";
const DashboardPage = () => {
  return (
    <main className="grid grid-cols-5 h-screen gap-8 bg-gray-200">
      <Sidebar/>
      <div className="content col-start-2 col-end-6 w-97/100">
        <div className="navbar flex justify-between pt-5">
          <h2 className="font-bold text-2xl">Dashboard</h2>
          <select
            id="month"
            className="pr-6 font-normal outline-none rounded-md text-sm p-1"
          >
            <option value="volvo">Bulan Ini</option>
            <option value="saab">April</option>
            <option value="opel">Mei</option>
            <option value="audi">Juni</option>
          </select>
        </div>
        <div className="rekap grid gap-10 grid-flow-col grid-cols-4 mt-8">
          <CardDashboard/>
          <CardDashboard/>
          <CardDashboard/>
          <CardDashboard/>
        </div>
        <div className="rekap mt-8 bg-primary h-3/5 rounded-lg drop-shadow-custom"></div>
      </div>
    </main>
  );
};

export default DashboardPage;
