import { Route, Routes } from "react-router-dom";
import { NewCard } from "../components/NewCard/NewCard";
import { Navbar } from "../components/NavBar/Navbar";
import { NotFoundPage } from "./NotFoundPage";
import { CardList } from "../components/CardList/CardList";
export const UtentePage = () => {
	return (
		<>
			<div className="utente_main">
				<div className="utente_navbar">
					<Navbar />
				</div>
				<Routes>
					<Route path="/" element={<CardList />} />
					<Route path="/newcard" element={<NewCard />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</div>
		</>
	);
};
