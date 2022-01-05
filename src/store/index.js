import { configureStore } from "@reduxjs/toolkit";

import faqReducer from "./faq-slice";
import questionReducer from "./question-slice";
import sortSlice from "./sort-slice";

export const store = configureStore({
  reducer: { question: questionReducer, faq: faqReducer, sort: sortSlice },
});

export default store;
