const AboutItem = ({ title, description }: { title: string, description: string}) => {
  return (
    <div className="w-1/3 px-[15px] flex flex-col justify-center items-center">
      <h3 className="text-[74px] font-bold">{title}</h3>
      <p className="font-light text-[18px leading-[24px]">{description}</p>
    </div>
  )
}

export default AboutItem
