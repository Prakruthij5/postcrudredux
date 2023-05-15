import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Krishna' },
    { id: '1', name: 'Udhav' },
    { id: '2', name: 'Kapila' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer