export type TStati = "attivo" | "inattivo" | "registrato" | "non registrato";
type TStatiOrdini = "principale" | "modifica";
export interface IAxiosUtente {
	name: string;
	ui: string;
}
export interface IDatiUtenti {
	nome?: string;
	email: string;
	password: string;
	confirma?: string;
}

export interface IDatiForm {
	img: File | string;
	token: string;
	titolo: string;
	istruzioni: string;
	_id?: string;
}
export interface IModifica extends IDatiForm {
	img: string;
}

export interface IEliminareCard {
	token?: string;
	_id: string;
}
export interface IModificareCard {
	img?: File;
	titolo: string;
	istruzioni: string;
	_id: string;
}

export interface ICardsGet {
	statoModifica: TStati;
	modificare: IModificareCard;
	totale: number;

	prodotti: [
		{
			_id: string;
			titolo: string;
			istruzioni: string;
			immagine: {
				img: string;
				public_id: string;
			};
			autore: {
				_id: string;
				nome: string;
			};
			createdAt: string;
			updateAt: string;
		},
	];
}
export interface ICardModifica {
	_id: string;
	titolo: string;
	istruzioni: string;
}
export interface IAuthDati {
	msg: string;
	token: string;
	nome: string;
}
export interface ICardProps {
	immagine?: string;
	titolo: string;
	sottoTitolo?: string;
	contenuto: JSX.Element | string;
	className?: string;
	id?: string;
	utente: boolean;
}

export interface IStato {
	statiOrdini: TStatiOrdini;
	stato: TStati;
}
