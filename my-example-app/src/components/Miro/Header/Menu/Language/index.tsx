import languageIcon from "../../../assets/language.png"

const Language = () => {
  return (
    <div className="flex mx-auto h-full justify-center items-center text-center">
      <img src={languageIcon} alt="Language" className="w-[24px] h-[24px] mr-[4px]" />
      <p className="text-[16px] mr-[13px]">EN</p>
    </div>
  );
};

export default Language;
