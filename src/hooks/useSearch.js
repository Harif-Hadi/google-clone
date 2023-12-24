import { useState } from "react";

const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const api_key = "AIzaSyBTNBH6sJzo4cG9GwIPdDjzsVvZhL2bx4U";
  const context_key = "00680dfa99c0a4ede";

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
