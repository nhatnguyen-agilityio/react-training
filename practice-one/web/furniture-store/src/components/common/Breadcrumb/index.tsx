import type { ReactNode } from 'react';

import { lazy } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = lazy(() =>
  import('../../ui/breadcrumb').then((module) => ({
    default: module.Breadcrumb,
  })),
);
const BreadcrumbItem = lazy(() =>
  import('../../ui/breadcrumb').then((module) => ({
    default: module.BreadcrumbItem,
  })),
);
const BreadcrumbList = lazy(() =>
  import('../../ui/breadcrumb').then((module) => ({
    default: module.BreadcrumbList,
  })),
);
const BreadcrumbPage = lazy(() =>
  import('../../ui/breadcrumb').then((module) => ({
    default: module.BreadcrumbPage,
  })),
);
const BreadcrumbSeparator = lazy(() =>
  import('../../ui/breadcrumb').then((module) => ({
    default: module.BreadcrumbSeparator,
  })),
);

interface BreadcrumbItem {
  label: string | ReactNode;
  href?: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbComponent = ({ items, className = '' }: BreadcrumbProps) => {
  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index} className="flex items-center">
            {item.isCurrentPage ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <Link to={item.href || '#'}>{item.label}</Link>
            )}
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
