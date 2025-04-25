import BuiltSection from "../BuiltSection"

const tags = [
  { id: 1, text: "Brainstorming" },
  { id: 2, text: "Diagramming" },
  { id: 3, text: "Meetings & Workshops" },
  { id: 4, text: "Scrum Events" },
  { id: 5, text: "Mapping" },
  { id: 6, text: "Research & Design" },
  { id: 7, text: "Strategic Planning" },
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
