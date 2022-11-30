import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button has correct initial text and color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });

  expect(button).toHaveStyle({ backgroundColor: "red" });
  expect(button).toHaveTextContent("Change to blue");
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent("Change to red");
});

test("button are enabled, checkbox is unchecked, after checkbox is checked the button is disabled", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "red" });

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).not.toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).not.toBeDisabled();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).not.toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
