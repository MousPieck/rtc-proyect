import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { utenteAxios } from "../../helpers/axiosConfig";

export const ricettePrincipale = createAsyncThunk(
	"[RTC/Scaricare]",
	async () => {
		try {
			const response = await utenteAxios("/prodotti");
			return response.data;
		} catch (error) {
			return error;
		}
	},
);

const initial = {
	stato: "inattivo",
	data: [] as object[],
	errori: [] as object[],
};
const principaleAction = createSlice({
	name: "[PCP]",
	initialState: initial,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(ricettePrincipale.fulfilled, (state, action) => {
			console.log(action.payload);
		});
	},
});

export default principaleAction.reducer;
