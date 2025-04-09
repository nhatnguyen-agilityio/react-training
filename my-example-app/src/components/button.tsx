const isDarkMode = false;

const MyButton = () => {
  return (
    <button className={isDarkMode ? "primary-btn" : "secondary-btn"}>
      Click me
    </button>
  );
}

export default MyButton;
