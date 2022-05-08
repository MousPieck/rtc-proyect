import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { utenteAxios } from "../../helpers/axiosConfig";
import { IDataForm, ICardsGet, IEliminareCard } from "../../interface";
import { store } from "../store";

export const ricetteCreate = createAsyncThunk(
	"[RCT/Create]",
	async (data: IDataForm, { rejectWithValue }) => {
		const formData = new FormData();
		const { token, img, titolo, istruzioni } = data;
		formData.append("file", img);
		formData.append("titolo", titolo);
		formData.append("istruzioni", istruzioni);

		if (token) {
			try {
				const response = await utenteAxios.post(
					"/podotti/id",
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							"x-token": token,
						},
					},
				);

				return response.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);
export const caricareRicette = createAsyncThunk("[RCT/SCaricare]", async () => {
	try {
		const response = await utenteAxios("/prodotti/");

		return response.data;
	} catch (error) {
		return error;
	}
});
export const caricareRicetteId = createAsyncThunk(
	"[RCT/SCaricareId]",
	async (token: string, { rejectWithValue }) => {
		if (token) {
			try {
				const response = await utenteAxios.get("/prodotti/id", {
					headers: {
						"x-token": token,
					},
				});
				return response.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);
export const modificareRicette = createAsyncThunk(
	"[RCT/Modificare]",
	async (data: IDataForm, { rejectWithValue }) => {
		const { token, _id, ...dati } = data;
		if (token) {
			try {
				const response = await utenteAxios.put(
					`/prodotti/${_id}`,
					dati,
					{
						headers: {
							"x-token": token,
						},
					},
				);
				store.dispatch(caricareRicetteId(token));
				return response.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);
export const eliminareRicette = createAsyncThunk(
	"[RCT/Eliminare]",
	async (data: IEliminareCard, { rejectWithValue }) => {
		const { token, id } = data;
		if (token) {
			try {
				const response = await utenteAxios.delete(`/prodotti/${id}`, {
					headers: {
						"x-token": token,
					},
				});

				store.dispatch(caricareRicetteId(token));
				return response.data;
			} catch (error) {
				return rejectWithValue(error);
			}
		}
	},
);

const initial = {
	stato: "inattivo",
	principale: {} as ICardsGet,
	utente: {} as ICardsGet,
	errori: [] as object[],
};
const ricetteAction = createSlice({
	name: "[RCT]",
	initialState: initial,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(
				caricareRicetteId.fulfilled,
				(state, action: PayloadAction<ICardsGet>) => {
					state.stato = "attivo";
					state.utente = action.payload;
				},
			)
			.addCase(caricareRicette.fulfilled, (state, action) => {
				state.stato = "attivo";
				state.principale = action.payload;
			});
	},
});

export default ricetteAction.reducer;
