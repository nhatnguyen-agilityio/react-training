import Input from "./Input";
import "./index.css";

export default function Form() {
  return (
    <div className="flex flex-col">
      <form className="flex flex-col gap-[20px]">
        <Input />
        <Input />
        <Input />
      </form>
    </div>
  );
}
