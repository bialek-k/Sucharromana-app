import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: { selectedIdx: 0 },
  reducers: {
    getSelectedIdx(state, action) {
      state.selectedIdx = action.payload.selectedIdx;
    },
  },
});

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
