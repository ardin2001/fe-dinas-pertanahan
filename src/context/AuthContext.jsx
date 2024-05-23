import { createContext, useEffect } from "react";
import { useState } from "react";
import { GetProfile } from "../utils/FetchUsers";

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const req = async function () {
      const response = await GetProfile();
      if (response.status) {
        setAuth(response.data);
      }else{
        setAuth(null)
      }
    };
    req()
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
