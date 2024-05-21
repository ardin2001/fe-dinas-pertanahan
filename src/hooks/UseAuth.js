import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export default function UseAuth() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth == null) {
      navigate("/");
    }
  }, []);

  return auth
}
