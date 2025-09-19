import Button from '../common/Button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '../ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const FilterDropdown = ({
  position,
  setPosition,
}: {
  position: string;
  setPosition: (value: string) => void;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="w-48 border-1 py-0 rounded-4xl text-base py-4"
        >
          {position === 'mostRecent'
            ? 'Most Recent'
            : position === 'lowToHigh'
              ? 'Price: Low to High'
              : 'Price: High to Low'}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="mostRecent">
            Most Recent
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="lowToHigh">
            Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="highToLow">
            Price: High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
