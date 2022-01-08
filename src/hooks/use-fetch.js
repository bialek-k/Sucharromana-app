import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";
import { sortActions } from "../store/sort-slice";

const useFetch = () => {
  const dispatch = useDispatch();
  const idxFromStore = useSelector((state) => state.sort.selectedIdx);

  const fetchJoke = async () => {
    const randomIdx = Math.floor(Math.random() * 5) + 1;

    const duplicateId = idxFromStore.filter(
      (el, id, arr) => arr.indexOf(el) !== id
    );
    if (duplicateId.length > 0) {
      console.log("powtórzenie");
    }

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

      // console.log(idxFromStore);
      // console.log(responseData);

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

  // useEffect(() => {
  //   fetchJoke();
  // }, []);

  return { fetchJoke };
};

export default useFetch;
