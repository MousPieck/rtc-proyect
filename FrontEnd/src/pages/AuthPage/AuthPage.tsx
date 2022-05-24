import { Route, Routes } from "react-router-dom";
import { Login } from "../../components/Auth/Login/Login";
import { Register } from "../../components/Auth/Register/Register";
import { StyleAuth } from "../../components/Auth/StyleAuth/StyleAuth";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import "./AuthPage.scss";

export const AuthPage = () => {
	return (
		<Routes>
			<Route
				path="login"
				element={
					<StyleAuth>
						<Login />
					</StyleAuth>
				}
			/>
			<Route
				path="register"
				element={
					<StyleAuth>
						<Register />
					</StyleAuth>
				}
			/>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};
