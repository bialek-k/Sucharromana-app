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
    setReloadApp(state) {
      state.endOfJokes = false;
      state.showAnswer = false;
    },
  },
});

const sendJokeData = () => {
  return async (dispatch) => {
    const getRequest = async () => {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const responseData = await response.json();
      responseData.shift();
    };

    await getRequest();
  };
};

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
