import { CircleUser, LogOut } from 'lucide-react';
import Button from '../common/Button';
import { lazy } from 'react';
import { useAuth } from '../../hooks/useAuth';

const DropdownMenu = lazy(() =>
  import('../ui/dropdown-menu').then((module) => ({
    default: module.DropdownMenu,
  })),
);
const DropdownMenuContent = lazy(() =>
  import('../ui/dropdown-menu').then((module) => ({
    default: module.DropdownMenuContent,
  })),
);
const DropdownMenuGroup = lazy(() =>
  import('../ui/dropdown-menu').then((module) => ({
    default: module.DropdownMenuGroup,
  })),
);
const DropdownMenuItem = lazy(() =>
  import('../ui/dropdown-menu').then((module) => ({
    default: module.DropdownMenuItem,
  })),
);
const DropdownMenuTrigger = lazy(() =>
  import('../ui/dropdown-menu').then((module) => ({
    default: module.DropdownMenuTrigger,
  })),
);

const UserButton = () => {
  const { logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`w-16 h-16 [&_svg:not([class*='size-'])]:size-7 bg-app-secondary rounded-full hover:bg-gray-200 transition`}
          aria-label="User"
        >
          <CircleUser className="text-app-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 border-background-primary"
        align="start"
      >
        <DropdownMenuGroup className="ml-2">
          <DropdownMenuItem
            className="flex justify-between"
            onClick={logout}
            aria-label="Logout"
          >
            Logout
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
