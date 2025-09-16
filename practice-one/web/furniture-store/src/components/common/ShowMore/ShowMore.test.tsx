import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ShowMore from '.';
import { fireEvent, render, screen } from '@testing-library/react';

const onClick = jest.fn();

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('ShowMoreComponent', () => {
  describe('Rendering', () => {
    it('renders show more button', () => {
      render(
        <TestQueryClient>
          <ShowMore onClick={onClick} />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Show More' })).toHaveAttribute(
        'disabled',
        'false',
      );
    });

    it('renders show more button with disabled', () => {
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
        'true',
      );
    });
  });

  describe('Interaction', () => {
    it('calls onClick when button is clicked', () => {
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
      render(
        <TestQueryClient>
          <ShowMore onClick={() => {}} />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Show More' })).toHaveAttribute(
        'disabled',
        'false',
      );
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
      expect(onClick).not.toHaveBeenCalled();
    });

    it('renders show more button with empty onClick and disabled', () => {
      render(
        <TestQueryClient>
          <ShowMore onClick={() => {}} disabled />
        </TestQueryClient>,
      );
      expect(
        screen.getByRole('button', { name: 'Show More' }),
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Show More' })).toHaveAttribute(
        'disabled',
        'true',
      );
      fireEvent.click(screen.getByRole('button', { name: 'Show More' }));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
