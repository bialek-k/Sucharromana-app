import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    allJokes: [],
    showAnswer: false,
    randomJokesId: [],
    jokeId: 0,
    endOfJokes: false,
  },
  reducers: {
    getAllJokes(state, action) {
      state.allJokes = action.payload.allJokes;
    },
    getAnswer(state) {
      state.showAnswer = !state.showAnswer;
    },
    setRandomJokesId(state, action) {
      state.randomJokesId = action.payload.randomJokesId;
    },
    setJokeId(state, action) {
      state.jokeId = action.payload.jokeId;
    },
    setEndOfJokes(state) {
      state.endOfJokes = !state.endOfJokes;
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
