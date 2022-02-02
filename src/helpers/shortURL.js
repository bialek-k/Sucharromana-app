const shortURL = (arr, baseURL) => {
  const urlToRemove = Array.from(baseURL);
  const shortedURL = arr.map((joke) => {
    const url = Array.from(joke.url);
    url.splice(0, urlToRemove.length);
    const id = url.splice(0, urlToRemove.length).join("");
    return {
      answer: joke.answer,
      id: joke.id,
      question: joke.question,
      urlID: id,
    };
  });

  return shortedURL;
};

export default shortURL;
