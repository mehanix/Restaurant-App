import axios from "axios";
import React, { createContext, useMemo } from "react";
import { API_URL } from "../../api";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserContext = createContext({});

export type UserType = {
  email: string;
  firstName: string;
  lastName: string;
  id: number;
  phone: string;
  score: number;
};
export const emptyUser: UserType = {
  email: "",
  firstName: "",
  lastName: "",
  id: 0,
  phone: "",
  score: 0,
};

const UserContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useLocalStorage<UserType>("user", emptyUser);

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result = await axios
      .post(`${API_URL}/users/login`, {
        email,
        password,
      })
      .then((res: any) => res)
      .catch((err: any) => err);

    if (!Boolean(result) || !Boolean(result?.data) || result.status !== 200) {
      return { error: true };
    }

    const futureUser: UserType = result.data;
    setUser(futureUser);
    return { error: false };
  };

  const logout = () => setUser(emptyUser);

  const isLogged = Boolean(user?.id);

  const store = {
    user,
    login,
    logout,
    isLogged,
  };

  const storeForProvider = useMemo(() => store, [store]);
  return (
    <UserContext.Provider value={storeForProvider}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext };
export default UserContextProvider;
