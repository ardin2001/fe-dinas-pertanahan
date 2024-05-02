import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../utils/FetchUsers";
import UseInput from "../components/hooks/UseInput.js";

function App() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [email, setEmail] = UseInput("");
  const [password, setPassword] = UseInput("");
  const [errEmail,setErrEmail] = useState(true)
  const [errPassword,setErrPassword] = useState(true)
  const handlerLogin = (event) => {
    event.preventDefault();
    Login(email, password).then((res) => {
      if (!res.status) {
        setMessage("email atau password yang anda masukkan salah");
      } else {
        localStorage.setItem("token", res.token);
        navigate("/dashboard");
      }
    });
  };
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.length == 0){
      setErrEmail(true)
    }else if(!emailRegex.test(email)){
      setErrEmail("email tidak valid")
    }else{
      setErrEmail(true)
    }
  }, [email]);

  useEffect(() => {
    if(password.length == 0){
      setErrPassword(true)
    }else if(password.length <8){
      setErrPassword("password kurang dari 8 karakter")
    }else{
      setErrPassword(true)
    }
  }, [password]);

  return (
    <div className="grid h-screen bg-quaternary">
      <div className="grid grid-flow-col grid-cols-2 m-12 drop-shadow-custom-login">
        <div className="grid justify-items-center items-center bg-secondary border-y-2 border-white border-l-2 ">
          <div className="grid justify-items-center w-10/12 gap-5">
            <div className="grid justify-items-center w-11/12 gap-5">
              <img src="logo.png" alt="" className="pr-8" />
              <p className="text-center font-medium">
                Selamat Datang Admin, Silahkan Login Terlebih Dahulu untuk
                melanjutkan Ke Halaman Admin
              </p>
            </div>
          </div>
        </div>
        <div className="grid bg-white items-center justify-items-center border-y-2 border-secondary border-r-2">
          <form
            onSubmit={handlerLogin}
            className="w-7/12 grid gap-4 px-10 py-3 rounded-md"
          >
            <h2 className="text-3xl font-bold text-center text-primary">
              Login Admin
            </h2>
            <div className="relative">
              <input
                ref={emailRef}
                type="text"
                placeholder="email"
                className="h-8 py-2 outline-none border-secondary border-b-2 w-full"
                id="email"
                value={email}
                onChange={setEmail}
              />
              <p className="text-red-500 text-xs absolute right-0">
                {errEmail==true ? null :errEmail}
              </p>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="password"
                className="h-8 py-2 outline-none border-secondary border-b-2 w-full"
                id="password"
                value={password}
                onChange={setPassword}
              />
              <p className="text-red-500 text-xs absolute right-0">
                {password==true ? null : errPassword}
              </p>
            </div>
            <button
              type="submit"
              className="bg-secondary w-5/12 justify-self-center h-8 rounded-sm font-semibold text-white mt-3"
            >
              Login
            </button>
            <p className="text-red-500 font-normal text-center">{message}</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
