import { Button } from "primereact/button";
import { Card, CardProps } from "primereact/card";

interface ICardBody {
	immagine: string;
	titolo: string;
	subTitolo?: string;
	contenuto: JSX.Element | string;
	className?: string;
}
export const CardsPrincipale: React.FC<ICardBody> = (data) => {
	const {
		immagine,
		titolo,
		subTitolo = "INGREDIENTI",
		contenuto,
		className,
	} = data;

	const header = (e: CardProps) => <img src={immagine} />;

	const footer = (e: CardProps) => (
		<>
			<Button
				label="Modificare"
				icon="pi pi-check"
				className="p-button-info"
			/>
			<Button
				label="Eliminare"
				icon="pi pi-times"
				className="p-button-danger"
			/>
		</>
	);

	return (
		<Card
			className={className}
			header={header}
			title={titolo}
			subTitle={subTitolo}
			children={contenuto}
		/>
	);
};
