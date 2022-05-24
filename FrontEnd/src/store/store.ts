import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./slices/auth.slice";
import ricetteSlice from "./slices/ricette.slice";

const persistConfig = {
	key: "root",
	storage,
};
const rootReducers = combineReducers({
	auth: persistReducer(persistConfig, authSlice),
	ricette: ricetteSlice,
});

export type RootState = ReturnType<typeof rootReducers>;
export const store = configureStore({
	reducer: rootReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: ["register"] as any,
			},
		}),
});
