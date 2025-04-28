import { useEffect, useMemo, useState } from "react";
import Title from "../../Common/title";
import BuiltBody from "./BuiltBody";
import Tags from "./Tags";

type tagProps = {
  id: number,
  title: string,
  isActive: boolean,
  description: string,
  learnMoreUrl: string,
  bannerImage: string
}

const BuiltSection = ({ tags, title }: { tags: tagProps[], title: string }) => {
  const [tagsList, setTagsList] = useState<tagProps[]>(tags);

  const activeItem = useMemo(() => {
    return tagsList.findIndex(tag => tag.isActive);
  }, [tagsList]);

  const handleTagClick = (tagId: number) => {
    setTagsList(prevTags =>
      prevTags.map(tag => ({
        ...tag,
        isActive: tag.id === tagId,
      })))
  }

  return (
    <div className="text-left w-4/5 mx-auto mb-[50px]">
      <Title title={title} />
      <Tags tags={tagsList} onClick={handleTagClick} />
      <BuiltBody tagItem={tagsList[activeItem]} />
    </div>
  );
}
export default BuiltSection;
