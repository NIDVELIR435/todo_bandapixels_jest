import React from "react";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./State/Store";

test("renders learn react link", async () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  fireEvent.click(getByText("Tasks"));
  await waitFor(() => {
    expect(getByText("Tasks")).toBeInTheDocument();
  });
});
