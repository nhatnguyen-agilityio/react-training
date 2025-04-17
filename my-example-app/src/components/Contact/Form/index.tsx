import Tags from "../Tags";
import Input from "./Input";
import Submit from "./Submit";
import "./index.css";

export default function Form() {
  return (
    <div className="flex flex-col">
      <form className="flex flex-col gap-[20px]">
        <Tags />
        <Input type={"name"}  placeholder={"Your name"} />
        <Input type={"email"} placeholder={"Your email"} />
        <Input type={"message"} placeholder={"Your message"} />
        <Submit />
      </form>
    </div>
  );
}
