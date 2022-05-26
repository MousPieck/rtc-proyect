import { store, RootState } from "../../../store/store";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { Card as CardPrime, CardProps } from "primereact/card";
import { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICardProps, IModificareCard } from "../../../interface";
import {
	eliminareRicette,
	modifica,
} from "../../../store/slices/ricette.slice";
import "./Card.scss";

const Card: React.FC<ICardProps> = ({
	immagine,
	titolo,
	className,
	sottoTitolo = "INGREDIENTI",
	contenuto,
	id,
	utente,
}) => {
	const token = useSelector((state: RootState) => state.auth.data.token);
	const navigate = useNavigate();
	const header = (e: CardProps) => <Image src={immagine} preview />;
	const elimina = (_id: string) => {
		const data = {
			token,
			_id,
		};
		store.dispatch(eliminareRicette(data));
	};
	const footer = (e: CardProps) => (
		<>
			{}
			<Button
				label="Modifica"
				icon="pi pi-check"
				className="p-button-info"
				onClick={() => {
					const data: IModificareCard = {
						_id: e.id as string,
						titolo: e.title as string,
						istruzioni: e.children as string,
					};

					store.dispatch(modifica(data));
					navigate("/utente/newcard");
				}}
			/>
			<Button
				label="Elimina"
				icon="pi pi-times"
				className="p-button-danger"
				onClick={() => elimina(e.id as string)}
			/>
		</>
	);

	return (
		<CardPrime
			id={id}
			className={className}
			header={header}
			title={titolo}
			subTitle={sottoTitolo}
			children={contenuto}
			footer={utente && footer}
		/>
	);
};

export default memo(Card);
