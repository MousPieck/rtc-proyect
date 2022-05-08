import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { caricareRicette } from "../store/actions/ricette.action";
import { RootState, store } from "../store/store";
import { Cards } from "../components/Cards/Cards";
import { FormCards } from "../components/FormCards";
import { Navbar } from "../components/Narbar";

export const UserSchermo = () => {
	// const token = useSelector((state: RootState) => state.auth.data.token);
	const data = useSelector((state: RootState) => state.ricette.principale);
	useEffect(() => {
		store.dispatch(caricareRicette());
	}, []);

	const Card = useMemo(
		() => <Cards data={data} utente={true} array={true} />,
		[data],
	);
	return (
		<div className="utente_main">
			<div className="utente_navbar">
				<Navbar />
			</div>
			<FormCards />
			{/* {Card} */}
			{/* {form ? <FormCards /> : <button onClick={viewForm}>Crear</button>} */}
		</div>
	);
};
