import { Navigate, Route, Routes } from "react-router-dom";
import { LoginSchermo } from "../pages/LoginSchermo";
import { RegisterSchermo } from "../pages/RegisterSchermo";

export const Auth = () => {
	return (
		<div className="auth_main">
			<div className="auth__container animate__animated animate__zoomIn">
				<img
					className="auth__imagine"
					src="/assets/img/auth1.jpg"
				></img>
				<div className="auth__container-f">
					<Routes>
						<Route path="login" element={<LoginSchermo />} />
						<Route path="register" element={<RegisterSchermo />} />

						<Route
							path="*"
							element={<Navigate to={"/auth/login"} replace />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
};
