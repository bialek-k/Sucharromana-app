import { configureStore } from "@reduxjs/toolkit";

import faqReducer from "./faq-slice";
import questionReducer from "./question-slice";
import jokeReducer from "./joke-slice";

export const store = configureStore({
  reducer: { question: questionReducer, faq: faqReducer, joke: jokeReducer },
});

export default store;
