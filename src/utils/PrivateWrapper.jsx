import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./validation";

export const PrivateWrapper = ({ children }) => {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
