import useLock from "../../hooks/useLock";

function Lock() {
  const timeString = useLock ();
  return (
    <div>
      <p style={{ color: "red", fontSize: "48px" }}>{timeString}</p>
    </div>
  );
}

export default Lock;
