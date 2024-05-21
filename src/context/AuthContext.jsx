import { createContext, useEffect } from "react";
import { useState } from "react";
import { GetProfile } from "../utils/FetchUsers";

export const AuthContext = createContext(null);
export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  useEffect(()=>{
    (async function(){
      const response = await GetProfile()
      if(response.status){
        setAuth(response.data)
      }else{
        setAuth(null)
      }
    })()
  },[])

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
}