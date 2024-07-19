import { createSlice } from "@reduxjs/toolkit";

let massageSlice = createSlice({
  name: "massages",
  initialState: {
    allMassages: null,
  },
  reducers: {
    setMassages: (state, action) => {
      state.allMassages = action?.payload;
    },
  },
});

export default massageSlice.reducer;
export let { setMassages } = massageSlice.actions;