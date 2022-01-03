import { createSlice } from "@reduxjs/toolkit";

const faqSlice = createSlice({
  name: "faq",
  initialState: { faqIsVisible: false },
  reducers: {
    showFaq(state) {
      state.faqIsVisible = !state.faqIsVisible;
    },
  },
});

export const faqActions = faqSlice.actions;

export default faqSlice.reducer;
