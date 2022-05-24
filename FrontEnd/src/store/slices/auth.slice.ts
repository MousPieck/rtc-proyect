import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { utenteAxios } from "../../helpers/axiosConfig";
import { IAuthDati, IDatiUtenti } from "../../interface";

export const signIn = createAsyncThunk(
	"[AUTH/login]",
	async (data: IDatiUtenti, { rejectWithValue }) => {
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

export const signUp = createAsyncThunk(
	"[AUTH/singUp]",
	async (data: IDatiUtenti, { rejectWithValue }) => {
		try {
			const response = await utenteAxios.post("/signup", data);

			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const valoreIniziale = {
	stato: "inattivo",
	register: false,
	data: {} as IAuthDati,
	errori: [] as object[],
};
const authSlice = createSlice({
	name: "[AUTH]",
	initialState: valoreIniziale,
	reducers: {
		statoRegister: (state, action: PayloadAction<boolean>) => {
			state.register = action.payload;
		},
		logout: (state) => {
			state.stato = "inattivo";
			state.data = {} as any;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(
				signIn.fulfilled,
				(state, action: PayloadAction<IAuthDati>) => {
					state.stato = "attivo";
					state.data = action.payload;
				},
			)
			.addCase(signIn.rejected, (state, action) => {
				state.stato = "inattivo";
				state.data = {} as any;
				state.errori.push(action.error);
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.stato = "attivo";
				state.data = action.payload;
				state.register = true;
			})
			.addCase(signUp.rejected, (state, action) => {
				state.stato = "inattivo";
				state.data = {} as any;
				state.errori.push(action.error);
			})

			.addCase(controllareToken.rejected, (state, action) => {
				state.stato = "inattivo";
				state.data = {} as any;
				state.errori.push(action.error);
			});
	},
});
export const { logout, statoRegister } = authSlice.actions;

export default authSlice.reducer;
