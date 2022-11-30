import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelCaseWithSpaces } from "./App";

test("button has correct initial text and color", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });

  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  expect(button).toHaveTextContent(
    `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`
  );
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(button).toHaveTextContent(
    `Change to ${replaceCamelCaseWithSpaces("MediumVioletRed")}`
  );
});

test("button are enabled, checkbox is unchecked, after checkbox is checked the button is disabled", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: `Change to ${replaceCamelCaseWithSpaces("MidnightBlue")}`,
  });
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).not.toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(button).not.toBeDisabled();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).not.toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("Red")).toBe("Red");
  });

  test("Works for one inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Works for multiple inner capital letter", () => {
    expect(replaceCamelCaseWithSpaces("MediumVioletRed")).toBe(
      "Medium Violet Red"
    );
  });
});
