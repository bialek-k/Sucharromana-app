import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
  name: "question",
  initialState: {
    allJokes: [],
    showAnswer: false,
    randomJokeIndexes: [],
    currentJokeIndex: 0,
    seenJokesCount: 0,
  },
  reducers: {
    gotAllJokes(state, action) {
      state.allJokes = action.payload.allJokes;
      state.randomJokeIndexes = getRandomIndexes(
        action.payload.allJokes.length
      );
      state.currentJokeIndex = state.randomJokeIndexes[state.seenJokesCount];
    },

    toggleShowAnswer(state) {
      state.showAnswer = !state.showAnswer;
    },
    nextJoke(state) {
      state.seenJokesCount++;
      state.currentJokeIndex = state.randomJokeIndexes[state.seenJokesCount];
    },
    reload() {
      return questionSlice.initialState;
    },
  },
});

export const getInitialData = () => {
  return async (dispatch) => {
    try {
      const allJokes = await getJokes();
      dispatch(
        questionSlice.actions.gotAllJokes({
          allJokes,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

const getJokes = async () => {
  const response = await fetch(
    "https://sucharromana-default-rtdb.firebaseio.com/.json"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const responseData = await response.json();
  return responseData.filter((joke) => joke.answer !== ":(");
};

const getRandomIndexes = (allJokesLength) => {
  const allIndexes = Array.from({ length: allJokesLength }, (_, idx) => idx);
  return randomizeArray(allIndexes);
};

const randomizeArray = (arr) => arr.slice().sort(() => Math.random() - 0.5);

export const questionActions = questionSlice.actions;
export default questionSlice.reducer;
