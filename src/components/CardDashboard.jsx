import { Message } from "react-iconly";
const CardDashboard = () => {
  return (
    <div className="masuk h-32 bg-white rounded-2xl drop-shadow-custom px-4 py-3 grid content-between">
      <div className=" flex justify-between">
        <h3 className="font-semibold text-base">Surat Masuk</h3>
        <Message />
      </div>
      <p className="text-4xl font-semibold text-blue-700">53</p>
      <div className="flex text-xs items-center gap-1">
        <h3 className="font-semibold text-base">10%</h3>
        <Message size="small" />
        <p>1 Minggu Terakhir</p>
      </div>
    </div>
  );
};

export default CardDashboard;
