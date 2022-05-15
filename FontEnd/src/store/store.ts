import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authAction from "./slices/auth.slice";
import principaleAction from "./slices/principale.slice";
import ricetteAction from "./slices/ricette.slice";

const rootReducers = combineReducers({
	auth: authAction,
	home: principaleAction,
	ricette: ricetteAction,
});
const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
export type RootState = ReturnType<typeof rootReducers>;
export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: ["register"] as any,
			},
		}),
});
