import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialitem: (store, action) => {
      return action.payload;
    },
  },
});

export default itemSlice;
