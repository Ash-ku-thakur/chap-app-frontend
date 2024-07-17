import { createSlice } from "@reduxjs/toolkit";

let userSlicer = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers:null
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action?.payload;
    },
    setOtherUsers:(state, action)=>{
      state.otherUsers = action.payload
    }
  },
});

export let { setAuthUser, setOtherUsers } = userSlicer.actions;
export default userSlicer.reducer;
