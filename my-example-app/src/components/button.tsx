import { useState } from "react";

const MyButton = () => {
  const isDarkMode = false;
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button 
      className={isDarkMode ? "primary-btn" : "secondary-btn"}
      onClick={handleClick}
    >
      Click {count} times
    </button>
  );
}

export default MyButton;
