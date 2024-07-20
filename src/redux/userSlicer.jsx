
import { createSlice } from "@reduxjs/toolkit";

let userSlicer = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers: null,
    copyOfOtherUsers:null,
    selectedUser: null,
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action?.payload;
    },
    setOtherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setCopyOfOtherUsers: (state, action) => {
      state.copyOfOtherUsers = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action?.payload;
    },
  },
});

export let { setAuthUser, setOtherUsers, setSelectedUser, setCopyOfOtherUsers } = userSlicer.actions;
export default userSlicer.reducer;
