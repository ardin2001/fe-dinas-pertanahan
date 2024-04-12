import { MdEmail } from "react-icons/md";
import { FaCaretUp } from "react-icons/fa";
const CardDashboard = () => {
  return (
    <div className="masuk h-32 bg-white rounded-2xl drop-shadow-custom px-4 py-3 grid content-between">
      <div className=" flex justify-between">
        <h3 className="font-semibold text-base">Surat Masuk</h3>
        <MdEmail style={{ color: "#f5372a" }} />
      </div>
      <p className="text-4xl font-semibold text-secondary">53</p>
      <div className="flex text-xs items-center gap-1">
        <h3 className="font-semibold text-base">10%</h3>
        <FaCaretUp size={"1.2rem"} />
        <p>1 Minggu Terakhir</p>
      </div>
    </div>
  );
};

export default CardDashboard;
