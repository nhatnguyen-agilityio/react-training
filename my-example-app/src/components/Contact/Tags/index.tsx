import Tag from "./Tag";
import "./index.css";
import tags from "../../../mock/tags";


export default function Tags() {
  return (
    <div className="flex flex-wrap tags">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag.tag} isActive={tag.isActive} />
      ))}
    </div>
  );
}
