import {
  UserContextProps,
  UserContextProviderProps,
  UserProps,
} from "@/interfaces";
import React, { useState } from "react";

const ContextUser = React.createContext<UserContextProps>({
  user: {} as UserProps,
  setUser(value) {},
});

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = useState<UserProps>({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <ContextUser.Provider value={{ user, setUser }}>
      {children}
    </ContextUser.Provider>
  );
}

export default ContextUser;
