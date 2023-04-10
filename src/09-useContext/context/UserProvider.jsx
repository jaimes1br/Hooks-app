
import { useState } from "react";
import { UserContex } from "./UserContext"

// const user = {
//     id: '123',
//     name: 'Brandon'
// }

export const UserProvider = ({ children }) => {

  const [user, setuser] = useState();

  return (
    <UserContex.Provider value={{ user, setuser }}>
        { children }
    </UserContex.Provider>
  )
}
