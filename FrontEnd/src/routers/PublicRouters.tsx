import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";

export const PublicRouters = ({ children }: any) => {
	const { token } = useSelector((state: RootState) => state.auth.data);
	return !token ? children : <Navigate to="/" />;
};
