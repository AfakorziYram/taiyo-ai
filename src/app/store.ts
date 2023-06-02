import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import contactsReducer from '../features/contact/contactSlice';
import mainConfigReducer from './appSlice';

export const store = configureStore({
	reducer: {
		contacts: contactsReducer,
		mainConfig: mainConfigReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
