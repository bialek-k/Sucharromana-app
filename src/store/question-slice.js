import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: { randomJoke: {}, showAnswer: false, reload: false, jokes: [] },
  reducers: {
    getRandomJoke(state, action) {
      state.randomJoke = {
        answer: action.payload.answer,
        id: action.payload.id,
        question: action.payload.question,
        url: action.payload.url,
      };
    },
    getAllJokes(state, action) {
      state.jokes = action.payload.jokes;
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
