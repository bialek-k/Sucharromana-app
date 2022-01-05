import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: { joke: {}, showAnswer: false, reload: false },
  reducers: {
    fetchRandomJoke(state, action) {
      state.joke = {
        answer: action.payload.answer,
        id: action.payload.id,
        question: action.payload.question,
        url: action.payload.url,
      };
    },
    getReload(state) {
      state.reload = !state.reload;
    },

    getAnswer(state) {
      state.showAnswer = !state.showAnswer;
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
