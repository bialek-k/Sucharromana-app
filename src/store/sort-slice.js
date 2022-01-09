import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: { selectedIdx: [], duplicateIdx: [] },
  reducers: {
    getSelectedIdx(state, action) {
      state.selectedIdx = action.payload.selectedIdx;
    },
    getDuplicateIdx(state, action) {
      state.duplicateIdx = action.payload.duplicateIdx;
    },
  },
});

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
