import Title from "../../Common/title";
import BuiltBody from "./BuiltBody";
import Tags from "./Tags";

const BuiltSection = ({ tags, title }: { tags: { id: number, text: string, isActive: boolean }[], title: string }) => {
  return (
    <div className="text-left w-4/5 mx-auto mb-[50px]">
      <Title title={title} />
      <Tags tags={tags} />
      <BuiltBody />
    </div>
  );
}
export default BuiltSection;
