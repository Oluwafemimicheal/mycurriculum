import { createContext, useState } from "react";  

export const LoginContext = createContext()


export const LoginProvider = ({children}) => {
  const [login, setLogin] = useState(false)
  const [pop, setPop] = useState(false)

  return (
    <LoginContext.Provider value={{ login, setLogin, pop, setPop }}>
      {children}
    </LoginContext.Provider>
  );
}


