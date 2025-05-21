import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import User from ".";

describe("User", () => {
  test("renders User component", () => {
    render(<User />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "Hello" },
    });

    waitFor(() => {
      expect(screen.getByText(/Searches for Hello/)).toBeInTheDocument();
    });

    screen.debug();
  });
});
