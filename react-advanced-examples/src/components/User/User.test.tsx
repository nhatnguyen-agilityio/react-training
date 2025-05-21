import { render, screen } from "@testing-library/react";
import User from ".";

describe("User", () => {
  test("renders User component", async () => {
    render(<User />);

    expect(screen.queryByText(/Signed in as/)).toBeNull();

    expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();

  });
});
