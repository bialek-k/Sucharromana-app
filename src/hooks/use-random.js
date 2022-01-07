import { useSelector } from "react-redux";

const useRandom = () => {
  const allJokes = useSelector((state) => state.question.jokes);
  return allJokes;
};
export default useRandom;
