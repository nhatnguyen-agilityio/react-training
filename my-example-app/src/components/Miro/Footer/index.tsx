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
    <div className="w-full h-[150px] pl-[30px] flex justify-between items-center mt-[100px] bg-primary-100">
      <ul className="flex">
        {about.map((item) => (
          <li key={item.id} className="mr-[20px] font-light underline underline-offset-3">{item.text}</li>
        ))}
      </ul>
      <div className="flex justify-end pr-[30px]">
        <Image src={iosIcon} alt="Install" className="w-auto h-auto mr-[10px]" />
        <Image src={androidIcon} alt="Install" className="w-auto h-auto mr-[10px]" />
        <Image src={install} alt="Install" className="w-auto h-auto" />
      </div>
    </div>
  )
}

export default Footer
