import { useState } from "react";
import { useCountdown } from "../../Hooks/Countdown"
import { Outlet } from "react-router-dom";

const Countdown = () => {
  const [timeInput, setTimeInput] = useState(0);

  const timeLeft = useCountdown(timeInput);

  return (
    <>
      <div>Countdown</div>
      <label>
        <input type="text" value={timeInput} onChange={(e) => setTimeInput(Number(e.target.value))}/>
      </label>
      <h1>The time left:{timeLeft} seconds</h1>
      <Outlet />
      <label htmlFor="countdown-label">Countdown label</label>
      <input id="countdown-label" type="text" value="Countdown input" placeholder="Input here"/>
    </>
  )
}

export default Countdown
