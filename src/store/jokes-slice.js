import { createSlice } from "@reduxjs/toolkit";

const jokeSlice = createSlice({
  name: "jokes",
  initialState: { jokes: [], showAnswer: false, reload: false, randomJoke: 0 },
  reducers: {
    getJokes(state, action) {
      state.jokes = action.payload.jokes;
    },
    getAnswer(state) {
      state.showAnswer = !state.showAnswer;
    },
    setRandomJokeId(state, action) {
      state.randomJoke = action.payload.randomId;
    },
  },
});

export const jokesActions = jokeSlice.actions;
export default jokeSlice.reducer;
