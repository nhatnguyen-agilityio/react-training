import BuiltSection from "../BuiltSection"

const tags = [
  { id: 1, text: "Brainstorming", isActive: true },
  { id: 2, text: "Diagramming", isActive: false },
  { id: 3, text: "Meetings & Workshops", isActive: false },
  { id: 4, text: "Scrum Events", isActive: false },
  { id: 5, text: "Mapping", isActive: false },
  { id: 6, text: "Research & Design", isActive: false },
  { id: 7, text: "Strategic Planning", isActive: false },
]

const CreativeIdeas = () => {
  return (
    <BuiltSection
      tags={tags}
      title={"Built for the way you work"}
    />
  );
}


export default CreativeIdeas;
