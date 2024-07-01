import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = <T>(): { isloading: boolean; isError: boolean; data: T[] } => {
  const [data, setData] = useState<T[]>([]);
  const [isloading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      try {
        const data = (await axios.get(process.env.API_URL!)).data;
        setData(data);
      } catch {
        setIsError(true);
      } finally {
        setisLoading(false);
      }
    })();
  }, []);

  return { isError, isloading, data };
};
