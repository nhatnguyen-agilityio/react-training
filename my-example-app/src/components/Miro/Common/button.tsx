const Button = ({ text, onClick }: { text: string, onClick?: () => void })=> {
    return (
        <button onClick={onClick} className="bg-button-100 hover:bg-blue-700 text-white py-2 px-4 rounded-[17px]">
            {text}
        </button>
    );
}

export default Button;
