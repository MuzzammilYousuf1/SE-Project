import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isLoggedIn: boolean = localStorage.getItem("login") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/signup" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
