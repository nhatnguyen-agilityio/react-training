import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShowMore from '.';
import { fireEvent, render, screen } from '@testing-library/react';

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('ShowMoreComponent', () => {
  describe('Rendering', () => {
    it('renders show more button', () => {
      const onClick = jest.fn();
      render(
        <TestQueryClient>
          <ShowMore onClick={onClick} />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).not.toHaveAttribute('disabled');
    });

    it('renders show more button with disabled', () => {
      const onClick = jest.fn();
      render(
        <TestQueryClient>
          <ShowMore onClick={onClick} disabled />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Show More' })).toHaveAttribute(
        'disabled',
      );
    });
  });

  describe('Interaction', () => {
    it('calls onClick when button is clicked', () => {
      const onClick = jest.fn();
      render(
        <TestQueryClient>
          <ShowMore onClick={onClick} />
        </TestQueryClient>,
      );
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
      expect(onClick).toHaveBeenCalled();
    });
  });

  describe('Edge cases', () => {
    it('renders show more button with empty onClick', () => {
      const emptyOnClick = jest.fn();
      render(
        <TestQueryClient>
          <ShowMore onClick={emptyOnClick} />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).not.toHaveAttribute('disabled');
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
      expect(emptyOnClick).toHaveBeenCalled();
    });

    it('renders show more button with empty onClick and disabled', () => {
      const emptyOnClick = jest.fn();
      render(
        <TestQueryClient>
          <ShowMore onClick={emptyOnClick} disabled />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Show More' })).toHaveAttribute(
        'disabled',
      );
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
      expect(emptyOnClick).not.toHaveBeenCalled();
    });
  });
});
