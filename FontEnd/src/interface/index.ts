export interface IAxiosUser {
	name: string;
	ui: string;
}
export interface IDataUser {
	nome?: string;
	email: string;
	password: string;
	confirma?: string;
}
export interface IDataForm {
	img: File;
	token: string;
	titolo: string;
	istruzioni: string;
	_id?: string;
}

export interface IEliminareCard {
	token: string;
	id: string | undefined;
}

// export interface IDataForm {}
export interface ICardsGet {
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
				createdAt: string;
				updateAt: string;
			};
		},
	];
}
export interface IAuthData {
	msg: string;
	token: string;
	nome: string;
}
export interface ICardComponent {
	data: ICardsGet;
	utente: boolean;
	array: boolean;
}

export interface ICardFormComponent {
	data: IDataForm;
	utente: boolean;
	array: boolean;
}
