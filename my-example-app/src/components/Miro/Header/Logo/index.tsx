import miroLogo from "../../assets/miro.png";


const Logo = () => {
  return (
    <h1 className="h-full flex items-center ml-[30px] mr-[30px]">
      <img src={miroLogo} alt="Logo" className="h-auto w-auto" />
    </h1>
  );
}

export default Logo;
