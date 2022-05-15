import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { utenteAxios } from "../../helpers/axiosConfig";
import { IAuthData, IDataUser } from "../../interface";

export const logIn = createAsyncThunk(
	"[AUTH/login]",
	async (data: IDataUser, { rejectWithValue }) => {
		try {
			const response = await utenteAxios.post("/login", data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const controllareToken = createAsyncThunk(
	"[AUTH/ctk]",
	async (token: string, { rejectWithValue }) => {
		if (token) {
			try {
				const response = await utenteAxios.post("/token", null, {
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

export const singUp = createAsyncThunk(
	"[AUTH/singUp]",
	async (data: IDataUser, { rejectWithValue }) => {
		try {
			const response = await utenteAxios.post("/signup", data);

			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const initial = {
	stato: "inattivo",
	data: {} as IAuthData,
	errori: [] as object[],
};
const authSlice = createSlice({
	name: "[AUTH]",
	initialState: initial,
	reducers: {
		logout: (state) => {
			state.stato = "inattivo";
			state.data = {} as any;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				logIn.fulfilled,
				(state, action: PayloadAction<IAuthData>) => {
					state.stato = "attivo";
					state.data = action.payload;
				},
			)
			.addCase(singUp.fulfilled, (state, action) => {
				state.stato = "attivo";
				state.data = action.payload;
			})

			.addCase(controllareToken.rejected, (state, action) => {
				state.stato = "inattivo";
				state.data = {} as any;
				state.errori.push(action.error);
			});
	},
});
export const { logout } = authSlice.actions;

export default authSlice.reducer;
