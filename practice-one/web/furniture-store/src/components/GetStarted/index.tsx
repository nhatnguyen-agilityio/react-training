import { MoveRight } from 'lucide-react';

const GetStarted = () => {
  return (
    <button className="bg-app-primary px-7 py-4 text-white flex items-center text-base font-semibold rounded-4xl hover:bg-app-tertiary">
      Get Started
      <MoveRight className="inline-block w-4 h-4 ml-4 font-semibold" />
    </button>
  );
};

export default GetStarted;
