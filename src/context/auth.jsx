import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext(null);
export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
}