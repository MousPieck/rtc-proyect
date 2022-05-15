import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PrincipalePage } from "./pages/PrincipalePage";
import { AuthPage } from "./pages/AuthPage";
import { UtentePage } from "./pages/UtentePage";
import { PrivateRouters } from "./routers/PrivateRouters";
import { PublicRouters } from "./routers/PublicRouters";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/auth/*"
					element={
						<PublicRouters>
							<AuthPage />
						</PublicRouters>
					}
				></Route>
				<Route path="/" element={<PrincipalePage />} />
				<Route path="*" element={<NotFoundPage />} />
				<Route
					path="/utente/*"
					element={
						<PrivateRouters>
							<UtentePage />
						</PrivateRouters>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
