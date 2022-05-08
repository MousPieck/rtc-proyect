import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { controllareToken, logout } from "../store/actions/auth.action";
import { RootState, store } from "../store/store";
import { useSelector } from "react-redux";

export const PrivateRouters = ({ children }: any) => {
	const { pathname } = useLocation();
	const { token }: { token: string } = useSelector(
		(state: RootState) => state.auth.data,
	);
	const navigate = useNavigate();
	useEffect(() => {
		store.dispatch(controllareToken(token));

		!token && store.dispatch(logout()) && navigate("/auth/login");
	}, [pathname]);

	return token ? children : <Navigate to="/auth/login" />;
};
