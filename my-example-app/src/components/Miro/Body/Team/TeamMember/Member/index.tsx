import Image from "../../../../Common/image";
import Profile from "../Profile";

const Member = ({
  companyImage,
  profileSrc,
  name,
  description,
  profileIntro,
}: {
  companyImage: string;
  profileSrc: string;
  name: string;
  description: string;
  profileIntro: string;
}) => {
  return (
    <div className="flex flex-col text-left my-[40px] w-1/3 pr-[30px]">
      <Image alt={"Company"} src={companyImage} className={""} />
      <p className="text-[18px] mt-[10px] h-[200px] font-light">{description}</p>
      <Profile profileImage={profileSrc} name={name} profileIntro={profileIntro} />
    </div>
  );
};

export default Member
