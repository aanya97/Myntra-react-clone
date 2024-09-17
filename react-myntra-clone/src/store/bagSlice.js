import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addBagitem: (State, action) => {
      State.push(action.payload);
    },
    removeFromBag: (State, action) => {
      return State.filter((itemId) => itemId !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions;
export default bagSlice;
