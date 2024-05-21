import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext(null);
function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthContextProvider }