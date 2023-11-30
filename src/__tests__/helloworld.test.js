import { render, screen } from "@testing-library/react";

test("Hello World", () => {
  render(<p>Hello World</p>);
  expect(screen.getByText("Hello World")).toHaveTextContent("Hello World");
});