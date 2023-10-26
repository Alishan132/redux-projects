import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import {
  useLocation,
  Navigate,
  Outlet,
  useLinkClickHandler,
} from "react-router-dom";

const ReaquireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ReaquireAuth;
