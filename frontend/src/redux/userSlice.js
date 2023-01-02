import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    User: null,
    users:[],
    auth: true,
    errors: [],
    loading: false,
   
}
export const getAllUsers=createAsyncThunk('user/getAllUsers',async(data,{rejectWithValue})=>{

    try {
        const res=await axios.get("api/user",data)
        return res.data
      
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})

export const getUser = createAsyncThunk('user/getUser', async (id, { rejectWithValue }) => {

    try {
        const res = await axios.get(`api/user/${id}`)
        return res.data

    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
})


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder

        .addCase(getAllUsers.pending, (state, { payload }) => {
            state.loading = true;
        })
        .addCase(getAllUsers.fulfilled, (state, { payload }) => {
            state.users = payload
            state.auth = true
            state.loading = false
        })
        .addCase(getAllUsers.rejected, (state, { payload }) => {
            state.errors = payload
            state.loading = false
        })
        
            .addCase(getUser.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                
                state.User = payload.user
                state.pseudo = payload.pseudo
                state.picture = payload.picture
                state.auth = true
                state.loading = false
            })
            .addCase(getUser.rejected, (state, { payload }) => {
                state.errors = payload
                state.loading = false
            })

    }
})

export default userSlice.reducer