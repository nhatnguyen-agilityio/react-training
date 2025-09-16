import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ProductItem from '.';

jest.mock('../../apis/add-cart', () => ({
  useAddCart: jest.fn(),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

const mockUseAuth = jest.mocked(
  jest.requireMock('../../hooks/useAuth').useAuth,
);

const mockUseAddCart = jest.mocked(
  jest.requireMock('../../apis/add-cart').useAddCart,
);

describe('ProductItemComponent', () => {
  const mockMutate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAuth.mockReturnValue({
      user: { id: 1 },
    });
    mockUseAddCart.mockReturnValue({
      mutate: mockMutate,
    });
  });
  describe('Rendering', () => {
    it('renders ProductItem component with correct text', () => {
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
    it('renders ProductItem component with correct image', () => {
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByRole('img')).toHaveAttribute(
        'src',
        'https://via.placeholder.com/150',
      );
      expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test');
    });
    it('renders ProductItem component with correct price', () => {
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      expect(screen.getByText('$100')).toBeInTheDocument();
    });
    it('renders ProductItem component with correct button', () => {
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Add to cart');
    });
    it('renders ProductItem component with correct button icon', () => {
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Add to cart');
      const icon = button.querySelector('svg');
      expect(icon).toBeInTheDocument();
    });
    it('renders ProductItem component with correct link', () => {
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.getByRole('link')).toHaveAttribute('href', '/products/1');
    });
  });

  describe('User Interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      await user.click(screen.getByRole('button'));
      expect(mockMutate).toHaveBeenCalled();
    });
  });

  describe('Loading State', () => {
    it('renders ProductItem component with correct loading state', () => {
      mockUseAddCart.mockReturnValue({
        mutate: mockMutate,
        isLoading: true,
      });
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveTextContent('Add to cart');
      expect(screen.getByRole('button')).toHaveAttribute('disabled');
    });
  });
});
