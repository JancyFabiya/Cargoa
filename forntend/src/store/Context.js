import { createContext,useState } from "react";

// export const FirebaseContext = createContext(null)
export const localStorage = createContext(null)

export const AuthContext = createContext(null)


export default function Context ({children}) {
    const [user,setUser] = useState(null)

    return(
        <localStorage.Provider value={{user,setUser}}>
           {children}
        </localStorage.Provider>
    )
}