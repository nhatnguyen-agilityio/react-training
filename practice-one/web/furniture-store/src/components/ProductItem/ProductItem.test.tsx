import { render, screen, act, waitFor } from '@testing-library/react';
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

jest.mock('sonner', () => ({
  toast: jest.fn(),
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

const mockToast = jest.mocked(jest.requireMock('sonner').toast);

describe('ProductItemComponent', () => {
  const mockMutate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAuth.mockReturnValue({
      user: { id: 1 },
    });
    mockUseAddCart.mockReturnValue({
      mutate: mockMutate,
      isLoading: false,
    });
  });
  describe('Rendering', () => {
    it('renders ProductItem component with correct text', async () => {
      await act(async () => {
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
      });

      await waitFor(() => {
        expect(screen.getByText('Test')).toBeInTheDocument();
      });
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

  describe('Return if user is not logged in', () => {
    it('does not render add to cart button when user is not logged in', () => {
      mockUseAuth.mockReturnValue({
        user: null,
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

      // Should not find any button (add to cart button should not be rendered)
      expect(screen.queryByRole('button')).not.toBeInTheDocument();

      // Should still render the product information
      expect(screen.getByText('Test')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(screen.getByRole('link')).toBeInTheDocument();
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

  describe('Mutation Callbacks', () => {
    // it('calls mutate with correct payload and onSuccess callback', async () => {
    //   const user = userEvent.setup();
    //   render(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={1}
    //         variantId={1}
    //         name="Test Product"
    //         price={100}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   await user.click(screen.getByRole('button'));

    //   expect(mockMutate).toHaveBeenCalledWith(
    //     {
    //       userId: 1,
    //       items: [
    //         {
    //           productId: 1,
    //           variantId: 1,
    //           quantity: 1,
    //         },
    //       ],
    //     },
    //     {
    //       onSuccess: expect.any(Function),
    //       onError: expect.any(Function),
    //     }
    //   );
    // });

    it('calls toast with success message when onSuccess callback is triggered', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test Product"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );

      await user.click(screen.getByRole('button'));

      const mutateCall = mockMutate.mock.calls[0];
      const callbacks = mutateCall[1];
      const onSuccessCallback = callbacks.onSuccess;

      onSuccessCallback();

      expect(mockToast).toHaveBeenCalledWith(
        'Product Test Product has been added to your cart',
        {
          className: 'text-left',
        },
      );
    });

    it('calls toast with error message when onError callback is triggered', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <ProductItem
            id={1}
            variantId={1}
            name="Test Product"
            price={100}
            imageUrl="https://via.placeholder.com/150"
            imageAlt="Test"
          />
        </TestQueryClient>,
      );

      await user.click(screen.getByRole('button'));

      const mutateCall = mockMutate.mock.calls[0];
      const callbacks = mutateCall[1];
      const onErrorCallback = callbacks.onError;

      onErrorCallback();

      expect(mockToast).toHaveBeenCalledWith(
        'Failed to add product to cart. Please try again.',
        {
          className: 'text-left',
        },
      );
    });

    // it('handles multiple onSuccess calls with different product names', async () => {
    //   const user = userEvent.setup();
    //   const { rerender } = render(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={1}
    //         variantId={1}
    //         name="First Product"
    //         price={100}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   // Click button to trigger mutate call for first product
    //   await user.click(screen.getByRole('button'));

    //   // First product
    //   const firstMutateCall = mockMutate.mock.calls[0];
    //   const firstCallbacks = firstMutateCall[1];
    //   firstCallbacks.onSuccess();

    //   expect(mockToast).toHaveBeenCalledWith(
    //     'Product First Product has been added to your cart',
    //     {
    //       className: 'text-left',
    //     }
    //   );

    //   // Clear mocks and render second product
    //   jest.clearAllMocks();
    //   mockMutate.mockClear();

    //   rerender(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={2}
    //         variantId={2}
    //         name="Second Product"
    //         price={200}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   // Click button to trigger mutate call for second product
    //   await user.click(screen.getByRole('button'));

    //   // Second product
    //   const secondMutateCall = mockMutate.mock.calls[0];
    //   const secondCallbacks = secondMutateCall[1];
    //   secondCallbacks.onSuccess();

    //   expect(mockToast).toHaveBeenCalledWith(
    //     'Product Second Product has been added to your cart',
    //     {
    //       className: 'text-left',
    //     }
    //   );
    // });

    // it('handles multiple onError calls', async () => {
    //   const user = userEvent.setup();
    //   const { rerender } = render(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={1}
    //         variantId={1}
    //         name="Test Product"
    //         price={100}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   // Click button to trigger mutate call for first product
    //   await user.click(screen.getByRole('button'));

    //   // First error
    //   const firstMutateCall = mockMutate.mock.calls[0];
    //   const firstCallbacks = firstMutateCall[1];
    //   firstCallbacks.onError();

    //   expect(mockToast).toHaveBeenCalledWith(
    //     'Failed to add product to cart. Please try again.',
    //     {
    //       className: 'text-left',
    //     }
    //   );

    //   // Clear mocks and render second product
    //   jest.clearAllMocks();
    //   mockMutate.mockClear();

    //   rerender(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={2}
    //         variantId={2}
    //         name="Another Product"
    //         price={200}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   // Click button to trigger mutate call for second product
    //   await user.click(screen.getByRole('button'));

    //   // Second error
    //   const secondMutateCall = mockMutate.mock.calls[0];
    //   const secondCallbacks = secondMutateCall[1];
    //   secondCallbacks.onError();

    //   expect(mockToast).toHaveBeenCalledWith(
    //     'Failed to add product to cart. Please try again.',
    //     {
    //       className: 'text-left',
    //     }
    //   );
    // });

    // it('verifies toast is called with correct className for both success and error', async () => {
    //   const user = userEvent.setup();
    //   render(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={1}
    //         variantId={1}
    //         name="Test Product"
    //         price={100}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   // Click button to trigger mutate call
    //   await user.click(screen.getByRole('button'));

    //   const mutateCall = mockMutate.mock.calls[0];
    //   const callbacks = mutateCall[1];

    //   // Test success callback
    //   callbacks.onSuccess();
    //   expect(mockToast).toHaveBeenCalledWith(
    //     expect.any(String),
    //     { className: 'text-left' }
    //   );

    //   // Clear the mock to test error callback separately
    //   mockToast.mockClear();

    //   // Test error callback
    //   callbacks.onError();
    //   expect(mockToast).toHaveBeenCalledWith(
    //     expect.any(String),
    //     { className: 'text-left' }
    //   );
    // });

    // it('handles onSuccess callback with product name containing special characters', async () => {
    //   const user = userEvent.setup();
    //   render(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={1}
    //         variantId={1}
    //         name="Product with Special Chars: !@#$%^&*()"
    //         price={100}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   // Click button to trigger mutate call
    //   await user.click(screen.getByRole('button'));

    //   const mutateCall = mockMutate.mock.calls[0];
    //   const callbacks = mutateCall[1];
    //   callbacks.onSuccess();

    //   expect(mockToast).toHaveBeenCalledWith(
    //     'Product Product with Special Chars: !@#$%^&*() has been added to your cart',
    //     {
    //       className: 'text-left',
    //     }
    //   );
    // });

    // it('handles onSuccess callback with very long product name', async () => {
    //   const user = userEvent.setup();
    //   const longProductName = 'A'.repeat(100);
    //   render(
    //     <TestQueryClient>
    //       <ProductItem
    //         id={1}
    //         variantId={1}
    //         name={longProductName}
    //         price={100}
    //         imageUrl="https://via.placeholder.com/150"
    //         imageAlt="Test"
    //       />
    //     </TestQueryClient>,
    //   );

    //   await user.click(screen.getByRole('button'));

    //   const mutateCall = mockMutate.mock.calls[0];
    //   const callbacks = mutateCall[1];
    //   callbacks.onSuccess();

    //   expect(mockToast).toHaveBeenCalledWith(
    //     `Product ${longProductName} has been added to your cart`,
    //     {
    //       className: 'text-left',
    //     }
    //   );
    // });
  });
});
