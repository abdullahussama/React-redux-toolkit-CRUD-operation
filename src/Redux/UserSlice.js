import { createSlice } from '@reduxjs/toolkit';

export const PostSlice = createSlice({
    name: 'users',
    initialState: {
        value: []
    },
    reducers: {
        addUser: (state,action) =>{
            state.value.push(action.payload)
        },
        deleteUser: (state,action) =>{
           state.value =  state.value.filter(value => value.id != action.payload.id)
        },
        updateUser: (state,action) =>{
            state.value.map(value =>{
                if(value.id == action.payload.id){
                value.name = action.payload.name;
                value.email = action.payload.email
            
        }})
        }
    }
})
export const {addUser, deleteUser, updateUser} = PostSlice.actions
export default PostSlice.reducer;