import Image from "../../../../Common/image";

const Banner = ({ bannerImage }: { bannerImage: string }) => {
  return (
    <div>
      <Image src={bannerImage} alt="Banner" className="w-auto h-auto" />
    </div>
  );
}

export default Banner;
