import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { ContactInterface } from '../features/contact/contactSlice';

export interface MainState {
	modalOpened: Boolean;
	extra?: ContactInterface;
}

const initialState: MainState = {
	modalOpened: false,
};

export const mainSlice = createSlice({
	name: 'mainConfig',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		openModal: (state) => {
			state.modalOpened = true;
		},
		closeModal: (state) => {
			state.modalOpened = false;
		},
		setExtraObject: (state, action: PayloadAction<ContactInterface>) => {
			state.extra = action.payload;
		},
		emptyExtraObject: (state) => {
			state.extra = {} as ContactInterface;
		},
	},
});

export const selectStatus = (state: RootState) => state.mainConfig.modalOpened;
export const selectExtraObject = (state: RootState) => state.mainConfig.extra;

export const { openModal, closeModal, setExtraObject, emptyExtraObject } = mainSlice.actions;

export default mainSlice.reducer;
