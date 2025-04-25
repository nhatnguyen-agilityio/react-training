import LearnMore from "../../../../Common/learnMore";

const Content = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col font-light mt-[40px] w-3/9">
      <p className="mb-[25px]">{title}</p>
      <p className="mb-[25px] text-[18px] pr-[30px] leading-[24px]">
        {description}
      </p>
      <LearnMore link={"#"} />
    </div>
  );
}

export default Content;
