import { cleanup, render, fireEvent } from "@testing-library/react";
import CheckboxWithLabel from ".";

afterEach(cleanup);
it("CheckboxWithLabel changes the text after click", () => {
  const { getByLabelText } = render(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(getByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(getByLabelText(/off/i));

  expect(getByLabelText(/on/i)).toBeTruthy();

  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeTruthy();
  expect(n).not.toBeUndefined();
  expect(n).toBeFalsy();
});
