import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";

const useFetch = () => {
  const dispatch = useDispatch();
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes.json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const responseData = await response.json();
      const shortResponse = responseData.slice(-5);
      const initialJokeId = Math.floor(Math.random() * shortResponse.length);
      dispatch(
        questionActions.getInitialJokeId({
          initialJokeId: initialJokeId,
        })
      );
      dispatch(
        questionActions.getAllJokes({
          allJokes: shortResponse,
        })
      );
    } catch (err) {
      console.log(err);
    } finally {
      setDataIsLoaded(true);
    }
  };

  return { fetchJoke, dataIsLoaded };
};

export default useFetch;
