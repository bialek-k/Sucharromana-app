import { createSlice, configureStore } from "@reduxjs/toolkit";

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

const faqSlice = createSlice({
  name: "faq",
  initialState: { faqIsVisible: false },
  reducers: {
    showFaq(state) {
      state.faqIsVisible = !state.faqIsVisible;
    },
  },
});

export const store = configureStore({
  reducer: { question: questionSlice.reducer, faq: faqSlice.reducer },
});

export const questionActions = questionSlice.actions;
export const faqActions = faqSlice.actions;

export default store;
