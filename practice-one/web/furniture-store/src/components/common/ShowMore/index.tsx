import { Button } from "../../ui/button";

const ShowMore = () => {
  return (
    <div className="mt-6 flex justify-center">
      <Button
        variant="outline"
        className="rounded-full border-black p-6 w-42 text-sm font-medium text-black transition hover:bg-gray-300"
      >
        Show More
      </Button>
    </div>
  );
}

export default ShowMore;
