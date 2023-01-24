import { useEffect, useState } from "react";
import { getCurrentFomatedDateTimeString } from "../../utils/date";

const Clock = () => {
  var date = getCurrentFomatedDateTimeString();
  useEffect(() => {
    const interval = setInterval(() => {
      date = getCurrentFomatedDateTimeString();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{date}</>;
};
export default Clock;
