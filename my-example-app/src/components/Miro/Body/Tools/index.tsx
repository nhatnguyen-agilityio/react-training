import BuiltSection from "../BuiltSection";

const tags = [
  { id: 1, text: "UX & Design", isActive: true },
  { id: 2, text: "Marketing", isActive: false },
  { id: 3, text: "Product Management", isActive: false },
  { id: 4, text: "Engineering", isActive: false },
  { id: 5, text: "Consultants", isActive: false },
  { id: 6, text: "Agile Coaches", isActive: false },
  { id: 7, text: "Sales", isActive: false },
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
