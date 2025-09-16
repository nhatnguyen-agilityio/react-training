import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BreadcrumbComponent from './index';

const TestQueryClient = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('BreadcrumbComponent', () => {
  describe('Rendering', () => {
    it('renders breadcrumb with home item', () => {
      const items = [{ label: 'Home', href: '/', isCurrentPage: true }];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('renders breadcrumb with category item', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Sitting room', href: '/sitting-room', isCurrentPage: true },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Sitting room')).toBeInTheDocument();
    });

    it('renders breadcrumb with multiple items', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Product Details', href: '/products/1', isCurrentPage: true },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Products')).toBeInTheDocument();
      expect(screen.getByText('Product Details')).toBeInTheDocument();
    });

    it('renders separators between items', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Category', isCurrentPage: true },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      const separators = document.querySelectorAll(
        '[data-slot="breadcrumb-separator"]',
      );
      expect(separators.length).toBe(2);
    });
  });

  describe('Current Page Handling', () => {
    it('renders current page as BreadcrumbPage', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Sitting room', isCurrentPage: true },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      const currentPageElement = screen.getByText('Sitting room');
      expect(currentPageElement).toBeInTheDocument();

      const currentPageLink = screen.getByRole('link', {
        name: 'Sitting room',
      });
      expect(currentPageLink).toHaveAttribute('aria-disabled', 'true');
      expect(currentPageLink).toHaveAttribute('aria-current', 'page');
    });
  });

  describe('Link Handling', () => {
    it('uses provided href for links', () => {
      const items = [
        { label: 'Home', href: '/home' },
        { label: 'Products', href: '/products' },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
        'href',
        '/home',
      );
      expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute(
        'href',
        '/products',
      );
    });
  });

  describe('Styling and Customization', () => {
    it('applies custom className', () => {
      const items = [
        { label: 'Home', href: '/' },
        { label: 'Current', isCurrentPage: true },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} className="font-bold" />
        </TestQueryClient>,
      );

      const breadcrumbElement = document.querySelector('font-bold');
      expect(breadcrumbElement).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles empty items array', () => {
      render(
        <TestQueryClient>
          <BreadcrumbComponent items={[]} />
        </TestQueryClient>,
      );

      expect(document.querySelector('nav')).toBeInTheDocument();
    });

    it('handles single item without href', () => {
      const items = [{ label: 'Single Item' }];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      expect(screen.getByText('Single Item')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: 'Single Item' })).toHaveAttribute(
        'href',
        '#',
      );
    });

    it('handles items with empty labels', () => {
      const items = [
        { label: '', href: '/' },
        { label: 'Valid Label', href: '/valid' },
      ];

      render(
        <TestQueryClient>
          <BreadcrumbComponent items={items} />
        </TestQueryClient>,
      );

      expect(screen.getByText('Valid Label')).toBeInTheDocument();
      expect(screen.getByRole('link', { name: '' })).toBeInTheDocument();
    });
  });
});
