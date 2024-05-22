import { GrCaretNext } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function ModalNotification({ notif, notifData }) {
  if (!notif) return null;

  return (
    <div className="notification w-1/4 bg-white shadow-xl absolute -translate-x-full z-50 rounded-xl p-4 max-h-96 overflow-auto">
      {notifData?.map((e) => (
        <Link to={`/surat-masuk?id=${e?.id}`} className="border-b-1 border-secondary py-2 grid grid-cols-5 items-center" key={e?.id}>
          <div className="col-span-4">
            <h4 className="text-sm font-semibold">{e?.from}</h4>
            <p className="text-xs">
              {e?.description}
            </p>
          </div>
          <GrCaretNext className="justify-self-end" />
        </Link>
      ))}
    </div>
  );
}
