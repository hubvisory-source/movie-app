import { useEffect, useState } from "react";

const useFetch = <ResultType extends any>(
  url: string,
  formatResult: (result: any) => ResultType
) => {
  const [data, setData] = useState<ResultType>();
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(formatResult(res));
      });
  }, []);

  return {
    data,
  };
};
export default useFetch;
