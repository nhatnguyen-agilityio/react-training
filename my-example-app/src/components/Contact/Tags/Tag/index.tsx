import './index.css';

export default function Tag() {
  return (
    <button className="w-[190px] text-[20px] rounded-[8px] tag-btn tag-btn-active" onClick={() => console.log('Tag clicked')}>
      UI/UX design
    </button>
  );
}
