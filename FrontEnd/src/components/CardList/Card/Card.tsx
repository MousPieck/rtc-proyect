import { Button } from "primereact/button";
import { Card as CardPrime, CardProps } from "primereact/card";
import { memo } from "react";
import { useSelector } from "react-redux";
import {
	eliminareRicette,
	modificare,
} from "../../../store/slices/ricette.slice";
import { RootState, store } from "../../../store/store";
import { NewCard } from "../../NewCard/NewCard";
import { useNavigate, Navigate } from "react-router-dom";

interface ICardProps {
	immagine?: string;
	titolo: string;
	sottoTitolo?: string;
	contenuto: JSX.Element | string;
	className?: string;
	id?: string;
	utente: boolean;
}

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
	const header = (e: CardProps) => <img src={immagine} />;
	const eliminare = (_id: string) => {
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
				label="Modificare"
				icon="pi pi-check"
				className="p-button-info"
				onClick={() => {
					const data = {
						_id: e.id as string,
						titolo: e.title as string,
						istruzioni: e.children as string,
					};

					store.dispatch(modificare(data));
					navigate("/utente/newcard");
				}}
			/>
			<Button
				label="Eliminare"
				icon="pi pi-times"
				className="p-button-danger"
				onClick={() => eliminare(e.id as string)}
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
