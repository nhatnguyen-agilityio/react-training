type InputProps = {
  type: string;
  placeholder: string;
};

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type="text"
      className="bg-[#F7F7F7] rounded-[8px] p-[10px] text-[20px] placeholder:text-[#B1A6C9]"
      placeholder={placeholder}
      name={type}
    />
  );
}
