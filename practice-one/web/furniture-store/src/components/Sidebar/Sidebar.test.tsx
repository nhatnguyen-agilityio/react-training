import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Sidebar from '.';

jest.mock('../ui/drawer', () => {
  let globalOnOpenChange: ((open: boolean) => void) | undefined;

  return {
    Drawer: ({
      children,
      open,
      onOpenChange,
    }: {
      children: ReactNode;
      open?: boolean;
      onOpenChange?: (open: boolean) => void;
    }) => {
      globalOnOpenChange = onOpenChange;
      return (
        <div data-testid="drawer" data-open={open}>
          {children}
        </div>
      );
    },
    DrawerTrigger: ({
      children,
      asChild,
    }: {
      children: ReactNode;
      asChild?: boolean;
    }) => (
      <div
        data-testid="drawer-trigger"
        data-as-child={asChild}
        onClick={() => {
          if (globalOnOpenChange) {
            globalOnOpenChange(true);
          }
        }}
      >
        {children}
      </div>
    ),
    DrawerContent: ({
      children,
      className,
      ...props
    }: {
      children: ReactNode;
      className?: string;
      [key: string]: unknown;
    }) => (
      <div data-testid="drawer-content" className={className} {...props}>
        {children}
      </div>
    ),
    DrawerHeader: ({
      children,
      className,
    }: {
      children: ReactNode;
      className?: string;
    }) => (
      <div data-testid="drawer-header" className={className}>
        {children}
      </div>
    ),
    DrawerTitle: ({
      children,
      className,
    }: {
      children: ReactNode;
      className?: string;
    }) => (
      <div data-testid="drawer-title" className={className}>
        {children}
      </div>
    ),
    DrawerClose: ({
      children,
      asChild,
    }: {
      children: ReactNode;
      asChild?: boolean;
    }) => (
      <div data-testid="drawer-close" data-as-child={asChild}>
        {children}
      </div>
    ),
  };
});

// Mock the common Button component
jest.mock('../common/Button', () => {
  return function MockButton({
    children,
    onClick,
    className,
    variant,
    size,
    ...props
  }: {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: string;
    size?: string;
    [key: string]: unknown;
  }) {
    return (
      <button
        onClick={onClick}
        className={className}
        data-testid="close-button"
        data-variant={variant}
        data-size={size}
        {...props}
      >
        {children}
      </button>
    );
  };
});

jest.mock('lucide-react', () => ({
  X: () => <span data-testid="cancel-icon">×</span>,
}));

const mockButton = <div>Button</div>;
const mockChildren = <div>Children</div>;
const mockTitle = 'Title';
const mockOnOpenChange = jest.fn();

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('Sidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render the sidebar when closed', () => {
      render(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            title={mockTitle}
            open={false}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      expect(screen.getByText('Button')).toBeInTheDocument();

      expect(screen.getByTestId('drawer')).toBeInTheDocument();
      expect(screen.getByTestId('drawer-trigger')).toBeInTheDocument();
    });

    it('should render the sidebar when open', () => {
      render(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            title={mockTitle}
            open={true}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Children')).toBeInTheDocument();
      expect(screen.getByText('Button')).toBeInTheDocument();

      expect(screen.getByTestId('drawer')).toBeInTheDocument();
      expect(screen.getByTestId('drawer-content')).toBeInTheDocument();
      expect(screen.getByTestId('drawer-header')).toBeInTheDocument();
      expect(screen.getByTestId('drawer-title')).toBeInTheDocument();
      expect(screen.getByTestId('close-button')).toBeInTheDocument();
    });

    it('should render the sidebar without a trigger button', () => {
      render(
        <TestQueryClient>
          <Sidebar
            children={mockChildren}
            title={mockTitle}
            open={true}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      expect(screen.queryByText('Button')).not.toBeInTheDocument();

      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Children')).toBeInTheDocument();
    });

    it('should render the sidebar without a title', () => {
      render(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            open={true}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      expect(screen.queryByText('Title')).not.toBeInTheDocument();

      expect(screen.getByText('Children')).toBeInTheDocument();
      expect(screen.getByText('Button')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should call the onOpenChange function when the sidebar trigger is clicked', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            title={mockTitle}
            open={false}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      const triggerButton = screen.getByText('Button');
      await user.click(triggerButton);

      expect(mockOnOpenChange).toHaveBeenCalledWith(true);
    });

    it('should render close button with correct props', () => {
      render(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            title={mockTitle}
            open={true}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      const closeButton = screen.getByTestId('close-button');
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe('Props Forwarding', () => {
    it('should pass open state to drawer', () => {
      const { rerender } = render(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            title={mockTitle}
            open={false}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      let drawer = screen.getByTestId('drawer');
      expect(drawer).toHaveAttribute('data-open', 'false');

      rerender(
        <TestQueryClient>
          <Sidebar
            button={mockButton}
            children={mockChildren}
            title={mockTitle}
            open={true}
            onOpenChange={mockOnOpenChange}
          />
        </TestQueryClient>,
      );

      drawer = screen.getByTestId('drawer');
      expect(drawer).toHaveAttribute('data-open', 'true');
    });
  });
});
