import type { ReactNode } from 'react';

import { lazy } from 'react';

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
const BreadcrumbLink = lazy(() =>
  import('../../ui/breadcrumb').then((module) => ({
    default: module.BreadcrumbLink,
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
          <div key={index} className="flex items-center">
            <BreadcrumbItem>
              {item.isCurrentPage ? (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.href || '#'}>
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
