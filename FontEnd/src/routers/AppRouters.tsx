import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFoundSchermo";
import { Principale } from "../pages/PrincipaleSchermo";
import { Auth } from "./Auth";
import { BodyRouter } from "./Body.Router";
import { PrivateRouters } from "./PrivateRouters";
import { PublicRouters } from "./PublicRouters";

export const AppRouters = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/auth/*"
					element={
						<PublicRouters>
							<Auth />
						</PublicRouters>
					}
				></Route>
				<Route path="/" element={<Principale />} />
				<Route path="*" element={<NotFound />} />
				<Route
					path="/utente/*"
					element={
						<PrivateRouters>
							<BodyRouter />
						</PrivateRouters>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
