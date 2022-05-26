import { store, RootState } from "../../store/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import * as ricette from "../../store/slices/ricette.slice";

export const CardList = () => {
	const token = useSelector((state: RootState) => state.auth.data.token);
	const { stato, utente } = useSelector((state: RootState) => state.ricette);

	useEffect(() => {
		stato === "inattivo" &&
			store.dispatch(ricette.caricareRicetteId(token));
	}, [stato]);

	return (
		<>
			{utente.prodotti && (
				<div className="utente_cards_user">
					{utente.prodotti.map((dat) => (
						<Card
							key={dat._id}
							id={dat._id}
							className="animate__animated animate__fadeIn"
							immagine={dat.immagine.img}
							titolo={dat.titolo}
							contenuto={dat.istruzioni}
							utente={true}
						/>
					))}
				</div>
			)}
		</>
	);
};
