import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import { sortActions } from "../store/sort-slice";

const useFetch = () => {
  const [loading, setIsLoading] = useState();
  const dispatch = useDispatch();
  const idxFromStore = useSelector((state) => state.sort.selectedIdx);

  if (loading) {
    const duplicateId = idxFromStore.filter(
      (el, id, arr) => arr.indexOf(el) !== id
    );
    if (duplicateId.length > 0) {
      console.log("powtórzenie");
    }
  }

  const fetchJoke = async () => {
    setIsLoading(true);
    const randomIdx = Math.floor(Math.random() * 3) + 1;

    try {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes/${randomIdx}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      dispatch(
        sortActions.getSelectedIdx({
          selectedIdx: [...idxFromStore, randomIdx],
        })
      );

      const responseData = await response.json();

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
  };

  return { fetchJoke, loading };
  setIsLoading(false);
};

export default useFetch;
