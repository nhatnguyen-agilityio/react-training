import Star from "./Star";
import googleIcon from "../../../../assets/google.png";
import getAppIcon from "../../../../assets/get-app.png";
import capterra from "../../../../assets/capterra.png";
import Icon from "./Icon";
import { memo } from "react";

const RateStar = memo(() => {
  return (
    <div className="flex items-center justify-between mt-[40px] w-3/4 p-[10px] bg-[#F5F5F7]">
      <Star />
      <div className="flex items-center justify-around w-2/5 mr-[10px]">
        <Icon icon={googleIcon} />
        <Icon icon={getAppIcon} />
        <Icon icon={capterra} />
      </div>
    </div>
  );
});

export default RateStar;
