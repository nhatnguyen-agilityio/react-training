const isDarkMode = false;

const MyButton = () => {
  function handleClick() {
    alert("Button clicked!");
  }
  
  return (
    <button 
      className={isDarkMode ? "primary-btn" : "secondary-btn"}
      onClick={handleClick}
    >
      Click me
    </button>
  );
}

export default MyButton;
