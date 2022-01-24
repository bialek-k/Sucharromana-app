import { useState } from "react";
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
      dispatch(
        questionActions.getAllJokes({
          allJokes: shortResponse,
        })
      );

      // generate Random Ids
      const max = shortResponse.length;
      let randomId = [];
      for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * max);
        if (randomId.indexOf(randomNumber) === -1) {
          randomId.push(randomNumber);
        } else {
          i--;
        }
      }
      dispatch(
        questionActions.setRandomJokesId({
          randomJokesId: randomId,
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
