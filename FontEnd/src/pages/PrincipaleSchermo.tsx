import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Cards } from "../components/Cards/Cards";
import { Navbar } from "../components/Narbar";
import { Footer } from "../components/Footer/Footer";
import { BodyPrincipale } from "../components/BodyPrincipale";

export const Principale = () => {
	const infoCards = useSelector(
		(state: RootState) => state.ricette.principale,
	);

	return (
		<>
			<div className="main_header">
				<Navbar />
				<div className="main_container_header">
					<h1 className="animate__animated animate__zoomIn">
						Ri<span>C</span>tte
					</h1>
					<div className="animate__animated animate__slideInUp">
						<h3>
							La cucina dell'autore è mettere la tua personalità
							in quello che fai e quella sensazione la rende
							qualcosa diverso.
						</h3>
						<h3>
							Nel vino c'è saggezza, nella birra c'è forza,
							nell'acqua ci sono batteri.
						</h3>

						<h3>
							La scoperta di un nuovo piatto è più utile per
							l'umanità che la scoperta di una stella.
						</h3>
					</div>
				</div>
				<video
					muted
					// autoPlay
					// loop
					src="/assets/video/carne.mp4"
				></video>
				<div className="main_header__capa"></div>
			</div>
			<BodyPrincipale />
			{/* <div className="main_ricette_bar">
				<InputText name="ricerca" placeholder="Ricercare" />
			</div> */}

			<Footer />
		</>
	);
};
