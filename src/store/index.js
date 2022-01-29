import { configureStore } from "@reduxjs/toolkit";

import faqReducer from "./faq-slice";
import questionReducer from "./question-slice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    faq: faqReducer,
  },
});

export default store;
