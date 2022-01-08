import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../store/question-slice";
import { sortActions } from "../store/sort-slice";

const useFetch = () => {
  const dispatch = useDispatch();

  const randomIdx = Math.floor(Math.random() * 175);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes/${randomIdx}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      dispatch(
        sortActions.getSelectedIdx({
          selectedIdx: randomIdx,
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

  useEffect(() => {
    fetchJoke();
  }, []);
};

export default useFetch;

/*
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../store/question-slice";
import { sortActions } from "../store/sort-slice";

const useFetch = () => {
  const dispatch = useDispatch();

  const randomIdx = Math.floor(Math.random() * 175);

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes/${randomIdx}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      dispatch(
        sortActions.getSelectedIdx({
          selectedIdx: randomIdx,
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
    };
    fetchJoke();
  }, []);
};

export default useFetch;

*/
