const CollaborateBlock = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="collaborate-block text-left w-3/10">
      <h2 className="font-bold text-[24px] leading-[28px] mb-[20px]">{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} className="font-light text-[18px] leading-[24px]" />
    </div>
  );
}

export default CollaborateBlock;
