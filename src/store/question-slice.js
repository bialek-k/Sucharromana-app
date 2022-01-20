import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    allJokes: [],
    showAnswer: false,
    initialJokeId: 0,
  },
  reducers: {
    getAllJokes(state, action) {
      state.allJokes = action.payload.allJokes;
    },
    getAnswer(state) {
      state.showAnswer = !state.showAnswer;
    },
    getInitialJokeId(state, action) {
      state.initialJokeId = action.payload.initialJokeId;
    },
  },
});

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
