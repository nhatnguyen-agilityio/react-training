import Image from "../../../Common/image";
import bannerImage from "../../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <Image src={bannerImage} alt="Banner" className="w-auto h-auto" />
    </div>
  );
}

export default Banner;
