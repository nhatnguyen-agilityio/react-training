import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Link from '.';

test('changes class when hovered', () => {
  const { container } = render(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  const linkElement = screen.getByText('Facebook');

  // Initial snapshot
  expect(container.firstChild).toMatchSnapshot();

  // Simulate mouse enter
  fireEvent.mouseEnter(linkElement);
  expect(container.firstChild).toMatchSnapshot();

  // Simulate mouse leave
  fireEvent.mouseLeave(linkElement);
  expect(container.firstChild).toMatchSnapshot();
});
