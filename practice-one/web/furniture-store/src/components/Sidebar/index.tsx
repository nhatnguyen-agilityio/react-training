import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import { X as Cancel } from 'lucide-react';
import type { ReactElement, ReactNode } from 'react';

const Sidebar = ({
  button,
  children,
  title,
}: {
  button: ReactElement;
  children: ReactNode;
  title?: string;
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent
        data-vaul-drawer-direction="right"
        className="w-full lg:w-1/2 border-none"
      >
        <div className="mx-auto w-full ml-1 md:ml-3">
          <DrawerHeader className="!flex-row relative !items-center !justify-center my-5">
            <DrawerClose asChild>
              <Button
                variant={'ghost'}
                size={'icon'}
                className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 bg-background-primary rounded-full"
              >
                <Cancel />
              </Button>
            </DrawerClose>
            <DrawerTitle className="text-center text-xl font-semibold">
              {title}
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full md:w-1/2 md:mx-auto lg:w-3/5">{children}</div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
