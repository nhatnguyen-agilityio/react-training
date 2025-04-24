import { memo } from "react";

type InputProps = {
  label?: string;
  type: string;
  value: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = memo((props: InputProps) => {
  const { type, value, placeholder, className, onChange } = props;
  return (
    <input className={className} type={type} value={value} placeholder={placeholder} onChange={onChange} />
  );
});

export default Input;
