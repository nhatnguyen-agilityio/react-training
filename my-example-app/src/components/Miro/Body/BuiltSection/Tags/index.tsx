import Button from "../../../Common/button";

const Tags = ({ tags }: { tags: { id: number, text: string }[]}) => {
  return (
    <div className="w-full flex justify-between mt-[25px]">
      {tags.map((tag) => (
        <Button
          key={tag.id}
          text={tag.text}
          className="bg-white rounded-[20px] font-light border border-[#F2F2F2] px-4 py-2 hover:bg-gray-200 active:bg-gray-300"
          onClick={() => alert(`${tag.text} button clicked`)}
        />
      ))}
    </div>
  );
}

export default Tags;
