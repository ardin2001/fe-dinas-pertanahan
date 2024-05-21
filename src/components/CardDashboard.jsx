import { MdEmail } from "react-icons/md";
import { FaCaretRight, FaCaretUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { GetDashboard } from "../utils/FetchChartDashboard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const CardDashboard = ({ title, count, description }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (auth == null) {
      navigate("/");
    }
    setLoading(true);
    GetDashboard()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="masuk h-32 bg-white rounded-2xl drop-shadow-custom px-4 py-3 grid content-between">
      {loading ? (
        <Skeleton count={3} width={225} height={30} baseColor="#DEDEDE" />
      ) : (
        <>
          <div className="flex justify-between">
            <h3 className="font-semibold text-base">{title}</h3>
            {data?.totalsurat != "23"}
          </div>
          <p className="text-4xl font-semibold text-secondary">
            {count}
          </p>
          <div className="flex text-xs items-center gap-1">
            <FaCaretRight size={"1.2rem"} />
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDashboard;
