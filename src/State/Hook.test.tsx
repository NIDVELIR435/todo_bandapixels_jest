import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { store } from "./Store";

describe("Hook :", () => {
  test("useFilteredSelector", () => {
    console.log(store);
    const { result, rerender } = renderHook(() => (
      <Provider store={store}>useAppSelector(memoSelector)</Provider>
    ));
    console.log(result.all);
    expect(result.current).toStrictEqual("Array");
  });
});
