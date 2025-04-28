import { useState } from "react";
import Button from "../../../Common/button";

const Tags = ({ tags }: { tags: { id: number, text: string, isActive: boolean }[]}) => {
  const [tagsList, setTagsList] = useState<{id: number, text: string, isActive: boolean}[]>(tags);

  const handleTagClick = (tagId: number) => {
    setTagsList(prevTags =>
      prevTags.map(tag => ({
        ...tag,
        isActive: tag.id === tagId,
      })))
  }

  return (
    <div className="w-full flex mt-[25px]">
      {tagsList.map((tag) => (
        <Button
          key={tag.id}
          text={tag.text}
          className={`${tag.isActive ? "bg-primary-100 text-white hover:bg-primary-100 active::text-white active:bg-primary-100 hover:text-white" : "bg-white text-primary-100"}  mr-[15px] rounded-[20px] font-light border border-[#F2F2F2] px-4 py-2 hover:bg-gray-200 active:bg-gray-300`}
          onClick={() => handleTagClick(tag.id)}
        />
      ))}
    </div>
  );
}

export default Tags;
