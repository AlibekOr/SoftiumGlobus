import {createSlice} from "@reduxjs/toolkit";

const initialState: any = {
    access: '',
    refresh: ''
}
const authToken = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        accessToken: (state, {payload}) => {
            state.access = payload.access
            state.refresh = payload.refresh
        }
    }
})
export const {accessToken} = authToken.actions
export default authToken