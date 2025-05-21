import { render, screen } from "@testing-library/react";
import Countdown from ".";
import { MemoryRouter } from "react-router-dom";
import * as CountdownHook from "../../Hooks/Countdown";

jest.mock("../../Hooks/Countdown", () => ({
  useCountdown: jest.fn(),
}));

describe("Countdown component", () => {
  test("render correctly", () => {
    const mockedUseCountdown = CountdownHook.useCountdown as jest.Mock;
    mockedUseCountdown.mockReturnValue(10);

    render(
      <MemoryRouter>
        <Countdown />
      </MemoryRouter>
    );

    screen.debug();

    expect(screen.getByText("Countdown")).toBeInTheDocument();
    expect(screen.getByText("The time left:10 seconds")).toBeInTheDocument();
    expect(screen.getByText(/seconds/)).toBeInTheDocument();
  });
});
