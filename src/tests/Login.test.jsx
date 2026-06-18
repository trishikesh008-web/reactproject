import { render, screen }
from "@testing-library/react";

import Login from "../pages/Login";

test("login heading", () => {

  render(<Login />);

  expect(
    screen.getByText("Login")
  ).toBeInTheDocument();

});