import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import { sortActions } from "../store/sort-slice";

const useFetch = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const idxFromStore = useSelector((state) => state.sort.selectedIdx);
  const randomIdx = Math.floor(Math.random() * 171);

  const fetchJoke = useCallback(async () => {
    try {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes/${randomIdx}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const responseData = await response.json();

      dispatch(
        sortActions.getSelectedIdx({
          selectedIdx: [...idxFromStore, randomIdx + 1],
        })
      );

      dispatch(
        questionActions.getRandomJoke({
          answer: responseData.answer,
          id: responseData.id,
          question: responseData.question,
          url: responseData.url,
        })
      );
    } catch (err) {
      console.log(err);
    }
    setLoaded(true);
  }, [dispatch, idxFromStore, randomIdx]);

  return { fetchJoke, loaded };
};

export default useFetch;
