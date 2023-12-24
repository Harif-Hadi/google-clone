import { useState } from "react";

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const api_key = import.meta.env.VITE_API_KEY;
  const context_key = import.meta.env.VITE_CONTEXT_KEY;

  const fetchDataHandler = async (term) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${term}`
      );
      const data = await response.json();
      setIsLoading(false);
      setData(data);
    } catch (err) {
      setError(true);
    }
  };

  return {
    isLoading,
    error,
    data,
    fetchDataHandler,
  };
};

export default useSearch;
