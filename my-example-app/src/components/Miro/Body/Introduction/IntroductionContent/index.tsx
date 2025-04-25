import LearnMore from "../../../Common/learnMore"

const IntroductionContent = (
  {
    title,
    description,
    link,
    blockClass,
    titleClass
  }:
  {
    title: string,
    description: string,
    link: string,
    blockClass: string,
    titleClass?: string
  }) => {
  return (
    <div className={`text-left ${blockClass}`}>
      <h2 className={`text-[48px] leading-[56px] font-bold mb-[10px] ${titleClass}`}>{title}</h2>
      <p className="font-light text-[18px] mb-[25px]">{description}</p>
      <LearnMore link={link} />
    </div>
  )
}

export default IntroductionContent
