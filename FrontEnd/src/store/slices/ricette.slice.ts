import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "../store";
import { utenteAxios } from "../../helpers/axiosConfig";
import {
	ICardsGet,
	IDatiForm,
	IEliminareCard,
	IModificareCard,
	TStati,
} from "../../interface";

export const ricetteCreate = createAsyncThunk(
	"[RCT/Create]",
	async (data: IDatiForm, { rejectWithValue }) => {
		const formData = new FormData();
		const { token, img, titolo, istruzioni } = data;
		formData.append("file", img);
		formData.append("titolo", titolo);
		formData.append("istruzioni", istruzioni);

		if (token) {
			try {
				const risposta = await utenteAxios.post(
					"/prodotti/id",
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							"x-token": token,
						},
					},
				);
				store.dispatch(caricareRicetteId(token));
				return risposta.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);
export const caricareRicette = createAsyncThunk("[RCT/SCaricare]", async () => {
	try {
		const risposta = await utenteAxios("/prodotti/");

		return risposta.data;
	} catch (error) {
		return error;
	}
});
export const caricareRicetteId = createAsyncThunk(
	"[RCT/SCaricareId]",
	async (token: string, { rejectWithValue }) => {
		if (token) {
			try {
				const risposta = await utenteAxios.get("/prodotti/id", {
					headers: {
						"x-token": token,
					},
				});
				return risposta.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);
export const modificareRicette = createAsyncThunk(
	"[RCT/Modificare]",
	async (data: IDatiForm, { rejectWithValue }) => {
		const { token } = data;
		const formData = new FormData();

		if (token) {
			formData.append("file", data.img);
			formData.append("titolo", data.titolo);
			formData.append("istruzioni", data.istruzioni);
			try {
				const risposta = await utenteAxios.put(
					`/prodotti/${data._id}`,
					formData,
					{
						headers: {
							"x-token": token,
						},
					},
				);
				store.dispatch(caricareRicetteId(token));
				return risposta.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);

export const eliminareRicette = createAsyncThunk(
	"[RCT/Eliminare]",
	async (data: IEliminareCard, { rejectWithValue }) => {
		const { token } = data;
		if (token) {
			try {
				const risposta = await utenteAxios.delete(
					`/prodotti/${data._id}`,
					{
						headers: {
							"x-token": token,
						},
					},
				);

				store.dispatch(elimina(data));
				return risposta.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);

const initial = {
	stato: "inattivo" as TStati,
	principale: {} as ICardsGet,
	utente: {} as ICardsGet,
	errori: [] as object[],
};

const ricetteSlice = createSlice({
	name: "[RCT]",
	initialState: initial,
	reducers: {
		modifica: (state, action: PayloadAction<IModificareCard>) => {
			state.utente.modificare = action.payload;
		},
		elimina: (state, action: PayloadAction<IEliminareCard>) => {
			type TProdotti = typeof state.utente.prodotti;

			const restanti = state.utente.prodotti.filter(
				(prodotti) => prodotti._id !== action.payload._id,
			);

			state.stato = "attivo";
			state.utente.prodotti = restanti as TProdotti;
		},
		stato: (state, action: PayloadAction<TStati>) => {
			state.stato = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				caricareRicetteId.fulfilled,
				(state, action: PayloadAction<ICardsGet>) => {
					state.stato = "inattivo";
					state.utente = action.payload;
					state.utente.modificare = {} as IModificareCard;
				},
			)
			.addCase(modificareRicette.fulfilled, (state) => {
				state.stato = "attivo";
				state.utente.modificare = {} as IModificareCard;
			})
			.addCase(caricareRicette.fulfilled, (state, action) => {
				state.stato = "attivo";
				state.principale = action.payload;
			});
	},
});
export const { modifica, elimina, stato } = ricetteSlice.actions;
export default ricetteSlice.reducer;
