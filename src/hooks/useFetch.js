import { useState, useEffect } from "react";

function useFetch(apiLink, cacheTime) {
  const [data, setData] = useState(null);
  const [lastFetchTime, setLastFetchTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem(apiLink);
        const cacheTimestamp = localStorage.getItem(`${apiLink}_timestamp`);

        if (
          cachedData &&
          cacheTimestamp &&
          Date.now() - parseInt(cacheTimestamp, 10) < cacheTime
        ) {
          console.log("Returning cached data");
          setData(JSON.parse(cachedData));
        } else {
          console.log("Making new API call");

          const response = await fetch(apiLink);

          const newData = await response.json();
          setData(newData);
          setLastFetchTime(Date.now());

          localStorage.setItem(apiLink, JSON.stringify(newData));
          localStorage.setItem(`${apiLink}_timestamp`, Date.now().toString());
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      if (Date.now() - lastFetchTime >= cacheTime) {
        fetchData();
      }
    }, cacheTime);

    return () => clearInterval(intervalId);
  }, [apiLink, cacheTime, lastFetchTime]);

  return [data];
}

export default useFetch;
