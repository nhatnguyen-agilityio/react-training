import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Timer = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    if (seconds <= 0) {
      clearInterval(interval);
      navigate("/docs/")
    }

    return () => clearInterval(interval);
  }, [seconds, navigate]);


  return (
    <div>
      <h1>{seconds}s</h1>
    </div>
  );
}
export default Timer;
