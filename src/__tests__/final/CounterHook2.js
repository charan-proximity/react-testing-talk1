// testing custom hooks
// 💯 setup function
import * as React from "react";
import { render, act } from "@testing-library/react";
import useCounter from "../../components/useCounter";

function setup({ initialProps } = {}) {
  const result = {};
  function TestComponent() {
    result.current = useCounter(initialProps);
    return null;
  }
  render(<TestComponent />);
  return result;
}

xtest("exposes the count and increment/decrement functions", () => {
  const result = setup();
  expect(result.current.count).toBe(0);
  // When testing, code that causes React state updates should be wrapped into act(...):

  // act(() => {
  //   /* fire events that update state */
  // });
  act(() => result.current.increment());
  expect(result.current.count).toBe(1);
  act(() => result.current.decrement());
  expect(result.current.count).toBe(0);
});

xtest("allows customization of the initial count", () => {
  const result = setup({ initialProps: { initialCount: 3 } });
  expect(result.current.count).toBe(3);
});

xtest("allows customization of the step", () => {
  const result = setup({ initialProps: { step: 2 } });
  expect(result.current.count).toBe(0);
  act(() => result.current.increment());
  expect(result.current.count).toBe(2);
  act(() => result.current.decrement());
  expect(result.current.count).toBe(0);
});
