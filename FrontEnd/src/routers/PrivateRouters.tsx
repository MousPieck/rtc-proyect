import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { controllareToken, logout } from "../store/slices/auth.slice";
import { RootState, store } from "../store/store";

export const PrivateRouters = ({ children }: { children: JSX.Element }) => {
	const { pathname } = useLocation();
	const token = useSelector((state: RootState) => state.auth.data.token);
	const navigate = useNavigate();
	useEffect(() => {
		// store.dispatch(controllareToken(token));
		// !token && store.dispatch(logout()) && navigate("/auth/login");
	}, [pathname]);

	return token ? children : <Navigate to="/auth/login" />;
};
