import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SearchProduct from '.';

const mockSetSearchProductsInput = jest.fn();
const mockSetSearchProducts = jest.fn();

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('SearchProductComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('Render SearchProduct component with search value valid', () => {
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={'Chair'}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );
      expect(
        screen.getByPlaceholderText('Search by name or category...'),
      ).toBeInTheDocument();
      expect(screen.getByDisplayValue('Chair')).toBeInTheDocument();
    });

    it('Render SearchProduct component with search value invalid', () => {
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={''}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );
      expect(
        screen.getByPlaceholderText('Search by name or category...'),
      ).toBeInTheDocument();
      expect(screen.getByDisplayValue('')).toBeInTheDocument();
    });

    it('Render SearchProduct component with valid button search icon', () => {
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={'Chair'}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(
        screen.getByRole('button').querySelector('svg'),
      ).toBeInTheDocument();
    });
  });
  describe('User Interaction', () => {
    it('User input search value and click search button', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={''}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );

      const input = screen.getByPlaceholderText(
        'Search by name or category...',
      );
      await user.type(input, 'Test');

      expect(mockSetSearchProductsInput).toHaveBeenCalledTimes(4);
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(1, 'T');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(2, 'e');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(3, 's');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(4, 't');

      await user.click(screen.getByRole('button'));
      expect(mockSetSearchProducts).toHaveBeenCalledWith('');
    });

    it('User input search value and press enter key', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={''}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );

      const input = screen.getByPlaceholderText(
        'Search by name or category...',
      );
      await user.type(input, 'Chair');

      expect(mockSetSearchProductsInput).toHaveBeenCalledTimes(5);
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(1, 'C');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(2, 'h');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(3, 'a');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(4, 'i');
      expect(mockSetSearchProductsInput).toHaveBeenNthCalledWith(5, 'r');

      await user.keyboard('{enter}');
      expect(mockSetSearchProducts).toHaveBeenCalledWith('');
    });

    it('User clicks search button with existing search value', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={'Test Search'}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );

      await user.click(screen.getByRole('button'));
      expect(mockSetSearchProducts).toHaveBeenCalledWith('Test Search');
    });

    it('User presses enter with existing search value', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <SearchProduct
            searchProductsInput={'Chair Search'}
            setSearchProductsInput={mockSetSearchProductsInput}
            setSearchProducts={mockSetSearchProducts}
          />
        </TestQueryClient>,
      );

      const input = screen.getByPlaceholderText(
        'Search by name or category...',
      );
      input.focus();
      await user.keyboard('{enter}');
      expect(mockSetSearchProducts).toHaveBeenCalledWith('Chair Search');
    });
  });
});
