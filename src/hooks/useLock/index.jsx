import { useEffect, useState } from "react";
function formatTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  const timeString = `${hours}:${minutes}:${seconds}`;
  return timeString;
}
const useLock = () => {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const timeString = formatTime(new Date());
      setTimeString(timeString);
    }, 1000);
    //cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);
  return timeString;
};

export default useLock;
