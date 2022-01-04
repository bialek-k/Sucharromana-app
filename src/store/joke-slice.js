import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "joke",
  initialState: { joke: {} },
  reducers: {
    getFetchJoke(state, action) {
      state.joke = {
        id: action.payload.id,
        question: action.payload.question,
        answer: action.payload.answer,
        url: action.payload.url,
      };
    },
  },
});

export const jokeAction = jokeSlice.actions;
export default jokeSlice.reducer;
