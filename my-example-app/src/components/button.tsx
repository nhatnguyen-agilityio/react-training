interface MyButtonProps {
  count: number;
  event: () => void;
}

const MyButton = (props: MyButtonProps) => {
  const isDarkMode = false;
  
  return (
    <button 
      className={isDarkMode ? "primary-btn" : "secondary-btn"}
      onClick={props.event}
    >
      Click {props.count} times
    </button>
  );
}

export default MyButton;
