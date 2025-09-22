import { lazy, memo } from 'react';
import Button from '../common/Button';

import { ChevronDown } from 'lucide-react';

const DropdownMenu = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenu })));
const DropdownMenuTrigger = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenuTrigger })));
const DropdownMenuContent = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenuContent })));
const DropdownMenuLabel = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenuLabel })));
const DropdownMenuSeparator = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenuSeparator })));
const DropdownMenuRadioGroup = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenuRadioGroup })));
const DropdownMenuRadioItem = lazy(() => import('../ui/dropdown-menu').then(module => ({ default: module.DropdownMenuRadioItem })));

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

export default memo(FilterDropdown);
