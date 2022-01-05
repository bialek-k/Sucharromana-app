import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { sortActions } from "../store/sort-slice";

const useFetch = () => {
  const length = useSelector((state) => state.sort.dataLength);
  const reload = useSelector((state) => state.question.reload);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJoke = async () => {
      const response = await fetch(
        "https://sucharromana-default-rtdb.firebaseio.com/jokes.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong :)");
      }

      const responseData = await response.json();
      dispatch(
        sortActions.getDataLength({
          length: responseData.length,
        })
      );
    };
    fetchJoke();
  }, []);

  useEffect(() => {
    dispatch(sortActions.getRandomIdx());
  }, [length]);
};

export default useFetch;

/*
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { questionActions } from "../store/question-slice";

const useFetch = () => {
  const reload = useSelector((state) => state.question.reload);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJokes = async () => {
      fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes/${
          Math.floor(Math.random() * 169) + 1
        }.json`
      )
        .then((response) => response.json())
        .then((data) =>
          dispatch(
            questionActions.fetchRandomJoke({
              id: data.id,
              answer: data.answer,
              question: data.question,
              url: data.url,
            })
          )
        );
    };
    fetchJokes();
  }, [dispatch, reload]);

  return { dispatch };
};

export default useFetch;
*/
