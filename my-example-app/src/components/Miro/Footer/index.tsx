import Image from "../Common/image"

import iosIcon from "../assets/ios.png"
import androidIcon from "../assets/google-play.png"
import install from "../assets/install.png"

const about = [
  {id: 1, text: "Terms of Service"},
  {id: 2, text: "Privacy Policy"},
  {id: 3, text: "Manage Cookies"},
]

const Footer = () => {
  return (
    <div className="w-full h-[150px] pl-[30px] mt-[100px] bg-primary-100">
      <div className="2xl:max-w-[1440px] mx-auto flex justify-between items-center h-full">
        <ul className="flex text-white">
          {about.map((item) => (
            <li key={item.id} className="mr-[20px] font-light underline underline-offset-3 hover:text-blue-200">{item.text}</li>
          ))}
        </ul>
        <div className="flex justify-end pr-[30px]">
          <Image src={iosIcon} alt="Install" className="w-auto h-auto mr-[10px]" />
          <Image src={androidIcon} alt="Install" className="w-auto h-auto mr-[10px]" />
          <Image src={install} alt="Install" className="w-auto h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Footer
