import { LevelContext } from "../LevelContext"

const Section = ({level, children}: {level: number, children: React.ReactNode}) => {
  return (
    <section>
      <LevelContext value={level}>
        {children}
      </LevelContext>
    </section>
  )
}

export default Section
