import { configureStore } from "@reduxjs/toolkit";
import userSlicer from "./userSlicer";
import massagesSlicer from "./massagesSlicer";

let Store = configureStore({
  reducer: {
    // slicers
    user: userSlicer,
    massages: massagesSlicer,
  },
});

export default Store;
