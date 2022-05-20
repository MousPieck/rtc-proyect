import { Route, Routes } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { NotFoundPage } from "./NotFoundPage";
import { Register } from "../components/Register/Register";

export const AuthPage = () => {
	return (
		<div className="auth_main">
			<div className="auth__container animate__animated animate__zoomIn">
				<img
					className="auth__imagine"
					src="/assets/img/auth1.jpg"
				></img>
				<div className="auth__container-f">
					<Routes>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};
