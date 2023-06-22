import { routes } from "@/constants";
import { ContextUser } from "@/context";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const UserGuard = () => {
  const { user } = useContext(ContextUser);

  return user.name ? <Outlet /> : <Navigate replace to={routes.HOME} />;
};
