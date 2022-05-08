import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authAction from "./actions/auth.action";
import principaleAction from "./actions/principale.action";
import ricetteAction from "./actions/ricette.action";

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
