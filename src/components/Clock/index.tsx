import { useEffect, useRef, useState } from "react";
import { getCurrentFomatedDateTimeString } from "../../utils/date";

const Clock = () => {
  const [date, setDate] = useState(getCurrentFomatedDateTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      let v = getCurrentFomatedDateTimeString();
      setDate(v);
    }, 1000);
    return () => clearInterval(interval);//Clear the interval here
  }, []);

  return <>{date}</>;//TODO Change the format
};
export default Clock;
