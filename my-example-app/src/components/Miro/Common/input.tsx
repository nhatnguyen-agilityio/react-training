type InputProps = {
  label?: string;
  type: string;
  value: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, value, placeholder, className, onChange }: InputProps) => {
  return (
    <input className={className} type={type} value={value} placeholder={placeholder} onChange={onChange} />
  );
};

export default Input;
