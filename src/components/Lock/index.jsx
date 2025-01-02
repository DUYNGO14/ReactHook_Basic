import { useEffect, useState } from "react";

Lock.propTypes = {};
function formatTime(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds =  `0${date.getSeconds()}`.slice(-2);
  const timeString = `${hours}:${minutes}:${seconds}`;
  return timeString;
}
function Lock() {
  const [timeString, setTimeString] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      const timeString = formatTime(new Date());
      setTimeString(timeString);
    }, 1000);
    //cleanup
    return () =>{
        console.log("cleanup");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <p style={{ color: "red", fontSize: "48px" }}>{timeString}</p>
    </div>
  );
}

export default Lock;
