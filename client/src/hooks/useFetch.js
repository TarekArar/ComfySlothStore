import { useRef, useState, useEffect } from "react";

const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState("fetching");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setStatus("fetching");
      if (cache.current[url]) {
        const data = cache.current[url];
        setData(data);
        setStatus("fetched");
      } else {
        const response = await fetch(url);
        const data = await response.json();
        cache.current[url] = data; // set response in cache;
        setData(data);
        setStatus("fetched");
      }
    };

    setTimeout(fetchData, 1000);
  }, [url]);

  return { status, data };
};

export { useFetch };
