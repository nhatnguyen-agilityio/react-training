import IntroductionContent from "../Introduction/IntroductionContent";
import IntroductionImage from "../Introduction/IntroductionImage";

import tools from "../../assets/tools.png"

const ConnectTools = () => {
  return (
    <div className="my-[70px] w-4/5 mx-auto">
      <div className="container flex justify-between">
        <IntroductionImage
          blockClass={"w-1/2 h-full flex justify-end mr-[20px]"}
          src={tools}
          alt={"Connect your tools"}
        />
        <IntroductionContent
          title={"Connect your tools, close your tabs"}
          description={"Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love."}
          link={"#"}
          blockClass={"w-2/5 flex flex-col justify-center pr-[10px]"}
          titleClass={"w-4/5 pr-[10px] tracking-[-1px] text-wrap"}
        />
      </div>
    </div>
  );
}

export default ConnectTools;
