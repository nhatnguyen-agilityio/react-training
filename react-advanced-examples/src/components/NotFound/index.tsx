import notFoundImage from "@/assets/not-found.png"
import Image from "../common/Image";

const NotFound = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center min-h-180 font-[OoohBaby]">
      <h2 className="text-6xl">OOPs</h2>
      <Image src={notFoundImage} alt="Not Found" className="w-100 h-auto" />
      <p className="text-6xl">404 - Page Not Found</p>
    </div>
  );
}

export default NotFound
