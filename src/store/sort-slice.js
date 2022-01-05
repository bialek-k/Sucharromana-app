import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: { idx: 0, dataLength: 0 },
  reducers: {
    getDataLength(state, action) {
      state.dataLength = action.payload.length;
    },
    getRandomIdx(state) {
      let initialIdx = Math.floor(Math.random() * state.dataLength) + 1;
      state.idx = initialIdx;
    },
  },
});

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
