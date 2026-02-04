import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("Gabriel")

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }