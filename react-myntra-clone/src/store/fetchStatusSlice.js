import { createSlice } from "@reduxjs/toolkit";
import DEFAULT_ITEM from "../data/items";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: { fetchDone: false, currentlyFetching: false },
  reducers: {
    markFetchingDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    },
  },
});
export const fetchstatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;
