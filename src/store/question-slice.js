import { createSlice } from "@reduxjs/toolkit";

import jokes from "../helpers/jokes";

const questionSlice = createSlice({
  name: "question",
  initialState: { jokes, showAnswer: false, randomJoke: [] },
  reducers: {
    getRandomJokes(state) {
      const idx = Math.floor(Math.random() * state.jokes.length);
      state.randomJoke = jokes[idx];
    },
    getAnswer(state) {
      state.showAnswer = !state.showAnswer;
    },
  },
});

export const questionActions = questionSlice.actions;

export default questionSlice.reducer;
