import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const options = {
          method: "GET",
          url: `https://jsearch.p.rapidapi.com/${endpoint}`,
          headers: {
            "X-RapidAPI-Key": '94d2070e7fmsheb557827f34f889p1080fdjsnd3553dd35dc9',
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
          },
          params: { ...query },
        };

        const response = await axios.request(options);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint, query]);

  return { data, isLoading, error };
};

export default useFetch;
