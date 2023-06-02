import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ContactInterface {
	id: String;
	fn: String;
	ln: String;
	contact: String;
	status: Boolean;
	image: String;
}

export interface ContactsState {
	data: ContactInterface[];
}

const initialState: ContactsState = {
	data: [],
};

export const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		add: (state, action: PayloadAction<ContactInterface>) => {
			state.data = [action.payload, ...state.data];
		},
		remove: (state, action: PayloadAction<String>) => {
			const id = action.payload;
			state.data = state.data.filter((el) => el.id !== id);
		},
		// The PayloadAction type is to declare the contents of `action.payload`
		edit: (state, action: PayloadAction<ContactInterface>) => {
			state.data = state.data.filter((el) => el.id !== action.payload.id);
			state.data = [action.payload, ...state.data];
		},
	},
});

export const selectContactData = (state: RootState) => state.contacts.data;

export const { add, remove, edit } = contactsSlice.actions;

export default contactsSlice.reducer;
