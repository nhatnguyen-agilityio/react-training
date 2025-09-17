import { CircleUser, LogOut } from 'lucide-react';
import Button from '../common/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useAuth } from '../../hooks/useAuth';

const UserButton = () => {
  const { logout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`w-16 h-16 [&_svg:not([class*='size-'])]:size-7 bg-app-secondary rounded-full hover:bg-gray-200 transition`}
        >
          <CircleUser className="text-app-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 border-background-primary"
        align="start"
      >
        <DropdownMenuGroup className="ml-2">
          <DropdownMenuItem className="flex justify-between" onClick={logout}>
            Logout
            <LogOut />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
