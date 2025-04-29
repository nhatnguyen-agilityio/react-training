import LearnMore from "../../../../Common/learnMore";

const Content = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="flex flex-col font-light mt-10 w-3/9">
      <p className="mb-6">{title}</p>
      <p className="mb-6 text-lg pr-7.5 leading-6">
        {description}
      </p>
      <LearnMore link={"#"} />
    </div>
  );
}

export default Content;
