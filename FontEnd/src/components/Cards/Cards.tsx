import { Button } from "primereact/button";
import { Card, CardProps } from "primereact/card";
import { useSelector } from "react-redux";
import { ICardComponent } from "../../interface";
import { eliminareRicette } from "../../store/actions/ricette.action";
import { RootState, store } from "../../store/store";

export const Cards: React.FC<ICardComponent> = ({ data, utente = false }) => {
	const token = useSelector((state: RootState) => state.auth.data.token);
	const { prodotti } = data;

	const bottoniSchermo = (e: CardProps): JSX.Element => {
		const data = {
			token,
			id: e.id,
		};
		const modificareCard = () => {
			const data = {
				img: e.header,
				titolo: e.title,
				token,
				id: e.id,
			};
		};
		const eliminareCard = () => {
			store.dispatch(eliminareRicette(data));
		};
		return (
			<>
				<Button
					label="Modificare"
					icon="pi pi-check"
					className="p-button-info"
					onClick={modificareCard}
				/>
				<Button
					label="Eliminare"
					icon="pi pi-times"
					className="p-button-danger"
					onClick={eliminareCard}
				/>
			</>
		);
	};

	return (
		<>
			{prodotti.map((dat) => (
				<Card
					className="animate__animated animate__fadeInUp"
					header={<img src={dat.immagine.img} />}
					title={dat.titolo}
					footer={utente && bottoniSchermo}
					id={dat._id}
				>
					{dat.istruzioni}
				</Card>
			))}
		</>
	);
};
