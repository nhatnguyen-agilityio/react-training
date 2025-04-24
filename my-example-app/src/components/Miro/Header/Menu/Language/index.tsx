import languageIcon from "../../../assets/language.png"
import Image from "../../../Common/image";

const Language = () => {
  return (
    <div className="group flex mx-auto h-full justify-center items-center text-center">
      <Image src={languageIcon} alt="Language" className="w-[24px] h-[24px] mr-[4px]" />
      <p className="text-[16px] mr-[13px] group-hover:underline">EN</p>
    </div>
  );
};

export default Language;
