import { Route, Routes } from "react-router-dom";
import { CardList } from "../../components/CardList/CardList";
import { Navbar } from "../../components/NavBar/Navbar";
import { NewCard } from "../../components/NewCard/NewCard";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import "./UtentePage.scss";

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
