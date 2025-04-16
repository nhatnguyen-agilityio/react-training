import './index.css';

type TagData = {
  tag: string;
  isActive: boolean;
};

export default function Tag({ tag, isActive }: TagData) {

  return (
    <button className={`w-[190px] text-[20px] rounded-[8px] tag-btn ${isActive && 'tag-btn-active'}`} onClick={() => console.log('Tag clicked')}>
      {tag}
    </button>
  );
}
