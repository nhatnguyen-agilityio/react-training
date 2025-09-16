import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '.';

const TestQueryClient = ({ children }: { children: ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('HeroComponent', () => {
  describe('Rendering', () => {
    it('renders main heading with correct text', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const mainHeading = screen.getByRole('heading', { level: 3 });
      expect(mainHeading).toBeInTheDocument();
      expect(mainHeading).toHaveTextContent(
        'Discover the Artistry of Modern Contemporary Furniture',
      );
    });

    it('renders store name heading', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const storeHeading = screen.getByRole('heading', { level: 2 });
      expect(storeHeading).toBeInTheDocument();
      expect(storeHeading).toHaveTextContent('FURNITURE STORE');
    });

    it('renders description paragraph', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const description = screen.getByText(
        'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      );
      expect(description).toBeInTheDocument();
    });

    it('renders hero image container', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const imageContainer = document.querySelector('div[class*="bg-center"]');
      expect(imageContainer).toBeInTheDocument();
    });
  });

  describe('Styling and Classes', () => {
    it('applies correct classes to store heading', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const storeHeading = screen.getByRole('heading', { level: 2 });
      expect(storeHeading).toHaveClass('text-sm');
      expect(storeHeading).toHaveClass('mb-4');
      expect(storeHeading).toHaveClass('md:mb-6');
      expect(storeHeading).toHaveClass('md:text-lg');
    });

    it('applies correct classes to main heading', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const mainHeading = screen.getByRole('heading', { level: 3 });
      expect(mainHeading).toHaveClass('px-6');
      expect(mainHeading).toHaveClass('text-2xl');
      expect(mainHeading).toHaveClass('mb-4');
      expect(mainHeading).toHaveClass('font-semibold');
      expect(mainHeading).toHaveClass('md:mb-6');
      expect(mainHeading).toHaveClass('md:text-5xl');
      expect(mainHeading).toHaveClass('md:font-bold');
      expect(mainHeading).toHaveClass('lg:text-6xl');
    });

    it('applies correct classes to description', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const description = screen.getByText(
        'Experience the elegance and functionality of cutting-edge design where luxury meets innovation in every piece for ultimate relaxation',
      );
      expect(description).toHaveClass('text-base');
      expect(description).toHaveClass('text-center');
      expect(description).toHaveClass('md:text-xl');
    });

    it('applies correct classes to image container', () => {
      render(
        <TestQueryClient>
          <Hero />
        </TestQueryClient>,
      );

      const imageContainer = document.querySelector('div[class*="bg-center"]');
      expect(imageContainer).toHaveClass('w-full');
      expect(imageContainer).toHaveClass('h-59');
      expect(imageContainer).toHaveClass('md:h-100');
      expect(imageContainer).toHaveClass('lg:h-106');
      expect(imageContainer).toHaveClass('bg-center');
      expect(imageContainer).toHaveClass('bg-cover');
    });
  });
});
