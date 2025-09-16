import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import CategoryButtons from '.';

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('CategoryButtonsComponent', () => {
  const mockButtonList = [
    'All',
    'Bedroom',
    'Living Room',
    'Kitchen',
    'Workspace',
    'Outdoor',
    'Bathroom',
    'Home office',
    'Dining room',
  ];

  const mockOnCategorySelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('renders all category buttons', () => {
      render(
        <TestQueryClient>
          <CategoryButtons
            buttonList={mockButtonList}
            selectedCategory="All"
            onCategorySelect={mockOnCategorySelect}
          />
        </TestQueryClient>,
      );

      mockButtonList.forEach((category) => {
        expect(screen.getByText(category)).toBeInTheDocument();
      });
    });

    it('renders carousel container', () => {
      render(
        <TestQueryClient>
          <CategoryButtons
            buttonList={mockButtonList}
            selectedCategory="All"
            onCategorySelect={mockOnCategorySelect}
          />
        </TestQueryClient>,
      );

      const carousel = document.querySelector('[data-slot="carousel"]');
      expect(carousel).toBeInTheDocument();

      const carouselContent = document.querySelector(
        '[data-slot="carousel-content"]',
      );
      expect(carouselContent).toBeInTheDocument();
    });

    it('renders correct number of carousel items', () => {
      render(
        <TestQueryClient>
          <CategoryButtons
            buttonList={mockButtonList}
            selectedCategory="All"
            onCategorySelect={mockOnCategorySelect}
          />
        </TestQueryClient>,
      );

      const carouselItems = document.querySelectorAll(
        '[data-slot="carousel-item"]',
      );
      expect(carouselItems).toHaveLength(mockButtonList.length);
    });
  });

  describe('Selected State', () => {
    it('applies selected styling to the selected category', () => {
      render(
        <TestQueryClient>
          <CategoryButtons
            buttonList={mockButtonList}
            selectedCategory="Kitchen"
            onCategorySelect={mockOnCategorySelect}
          />
        </TestQueryClient>,
      );

      const kitchenButton = screen.getByText('Kitchen');
      expect(kitchenButton).toHaveClass('bg-app-primary');
      expect(kitchenButton).toHaveClass('text-white');
      expect(kitchenButton).toHaveClass('hover:bg-app-primary');
      expect(kitchenButton).toHaveClass('hover:text-white');
    });
  });

  describe('User Interactions', () => {
    it('calls onCategorySelect when a button is clicked', async () => {
      const user = userEvent.setup();
      render(
        <TestQueryClient>
          <CategoryButtons
            buttonList={mockButtonList}
            selectedCategory="All"
            onCategorySelect={mockOnCategorySelect}
          />
        </TestQueryClient>,
      );

      const kitchenButton = screen.getByText('Kitchen');
      await user.click(kitchenButton);

      expect(mockOnCategorySelect).toHaveBeenCalledWith('Kitchen');
      expect(mockOnCategorySelect).toHaveBeenCalledTimes(1);
    });
  });

  describe('Props Handling', () => {
    it('handles single button in list', () => {
      const singleButtonList = ['All'];
      render(
        <TestQueryClient>
          <CategoryButtons
            buttonList={singleButtonList}
            selectedCategory="All"
            onCategorySelect={mockOnCategorySelect}
          />
        </TestQueryClient>,
      );

      expect(screen.getByText('All')).toBeInTheDocument();
      expect(screen.getAllByRole('button')).toHaveLength(1);
    });
  });
});
