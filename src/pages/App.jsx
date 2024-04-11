import logo from "../assets/logo.png";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handlerLogin = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="grid h-screen bg-quaternary">
      <div className="grid grid-flow-col grid-cols-2 m-12 drop-shadow-custom-login">
        <div className="grid justify-items-center items-center bg-secondary border-y-2 border-white border-l-2 ">
          <div className="grid justify-items-center w-10/12 gap-5">
            <div className="grid justify-items-center w-11/12 gap-5">
              <img src={logo} alt="" className="pr-8" />
              <p className="text-center font-medium">
                Selamat Datang Admin, Silahkan Login Terlebih Dahulu untuk melanjutkan Ke Halaman Admin
              </p>
            </div>
          </div>
        </div>
        <div className="grid bg-white items-center justify-items-center border-y-2 border-secondary border-r-2">
          <form
            onSubmit={handlerLogin}
            className="w-7/12 grid gap-4 px-10 py-3 rounded-md"
          >
            <h2 className="text-3xl font-semibold text-center">Login Admin</h2>
            <input
              ref={usernameRef}
              type="text"
              placeholder="username"
              className="h-8 py-2 outline-none border-secondary border-b-2"
            />
            <input
              type="password"
              placeholder="password"
              className="h-8 py-2 outline-none border-secondary border-b-2"
            />
            <button
              type="submit"
              className="bg-secondary w-5/12 justify-self-center h-8 rounded-sm font- text-white"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
