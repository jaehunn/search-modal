import { act, renderHook } from "@testing-library/react";

import { useDarkMode } from "./useDarkMode";
import { THEME } from ".";

/** @see https://testing-library.com/docs/react-testing-library/api/#renderhook */
/** @see https://vitest.dev/guide/snapshot.html#snapshot */
describe("useDarkMode", () => {
  test("다크모드가 감지되지않으면, 기본 테마를 반환한다.", () => {
    const { result } = renderHook(() => useDarkMode(THEME["DARK"]));

    expect(result.current.theme).toEqual(THEME["DARK"]);
  });

  test("테마를 변경할 수 있다.", async () => {
    const { result } = renderHook(useDarkMode);

    expect(result.current.theme).toEqual(THEME["LIGHT"]);

    act(() => {
      result.current.changeTheme("DARK");
    });

    expect(result.current.theme).toEqual(THEME["DARK"]);
  });

  /** TODO: matchMedia change 이벤트를 일으켜서 검증. */
});
