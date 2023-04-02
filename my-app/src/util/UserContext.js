import { createContext, useContext, useState } from "react";

const AllUserContext = createContext();

export const useUserContext = () => {
  return useContext(AllUserContext);
};

export default function UserContext({ children }) {
  const [users, setUsers] = useState();
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AllUserContext.Provider
      value={{ users, setUsers, user, setUser, isLoggedIn, setIsLoggedIn }}
    >
      {children}
    </AllUserContext.Provider>
  );
}
