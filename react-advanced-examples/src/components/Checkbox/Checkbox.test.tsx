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
});
