import { useEffect, useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [randomIds, setRandomIds] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        `https://sucharromana-default-rtdb.firebaseio.com/jokes.json`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const responseData = await response.json();
      responseData.shift();
      setData(responseData);

      const max = responseData.length;
      let randomId = [];
      for (let i = 0; i < max; i++) {
        const randomNumber = Math.floor(Math.random() * max);
        if (randomId.indexOf(randomNumber) === -1) {
          randomId.push(randomNumber);
        } else {
          i--;
        }
      }
      setRandomIds(randomId);
    } catch (err) {
      setError(err.message);
    } finally {
      setDataIsLoaded(true);
    }
  };
  useEffect(() => {
    fetchJoke();
  }, []);

  return { fetchJoke, data, dataIsLoaded, error, randomIds };
};

export default useFetch;

/*
 dispatch(
        questionActions.getAllJokes({
          allJokes: responseData,
        })
      );
dispatch(
        questionActions.setRandomJokesId({
          randomJokesId: randomId,
        })
      );

      */
