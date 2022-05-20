import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card";
import { caricareRicetteId } from "../../store/slices/ricette.slice";
import { RootState, store } from "../../store/store";

export const CardList = () => {
	const token = useSelector((state: RootState) => state.auth.data.token);
	const data = useSelector((state: RootState) => state.ricette.utente);
	useEffect(() => {
		store.dispatch(caricareRicetteId(token));
	}, []);

	return (
		<>
			<div className="utente_cards_user">
				{data.prodotti.map((dat) => (
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
		</>
	);
};
