import BuiltSection from "../BuiltSection";

const tags = [
  { id: 1, text: "UX & Design" },
  { id: 2, text: "Marketing" },
  { id: 3, text: "Product Management" },
  { id: 4, text: "Engineering" },
  { id: 5, text: "Consultants" },
  { id: 6, text: "Agile Coaches" },
  { id: 7, text: "Sales" },
]

const Tools = () => {
  return (
    <BuiltSection
      tags={tags}
      title={"Built for all kinds of teams"}
    />
  );
}
export default Tools;
