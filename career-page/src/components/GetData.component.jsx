import { useEffect, useState } from "react";
const GetData = (url) => {
  const [isPending, setPending] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't load the resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPending(false);
      });
    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default GetData;
