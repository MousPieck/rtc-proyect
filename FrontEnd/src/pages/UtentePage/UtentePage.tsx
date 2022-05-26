import { Route, Routes } from "react-router-dom";

import { CardList } from "../../components/CardList/CardList";
import { NewCard } from "../../components/NewCard/NewCard";
import { StyleUtente } from "../../components/StyleUtente/StyleUtente";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const UtentePage = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<StyleUtente>
						<CardList />
					</StyleUtente>
				}
			/>
			<Route
				path="/newcard"
				element={
					<StyleUtente>
						<NewCard />
					</StyleUtente>
				}
			/>
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
};
