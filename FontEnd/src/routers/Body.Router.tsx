import { Route, Routes, useLocation } from "react-router-dom";
import { NotFound } from "../pages/NotFoundSchermo";
import { Principale } from "../pages/PrincipaleSchermo";
import { UserSchermo } from "../pages/UserSchermo";

export const BodyRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<UserSchermo />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
