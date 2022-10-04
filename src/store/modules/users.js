import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
  name: 'users', 
  initialState: {
    infos: {}
  },
  reducers: {
    updateInfos: (state, action) => {
      state.infos = action.payload;
    },
    clearInfos: (state) => {
      state.infos = {}
    },
    clearInfos:(state)=>{
      state.infos={}
    }
  }
});

export default usersSlice.reducer