import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import { OilSection } from "@/components/store-sections";

vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, params: _params, ...props }: { children: ReactNode; to: string; params?: unknown }) =>
    <a href={to} {...props}>{children}</a>,
}));

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function setup(reducedMotion = false) {
  vi.useFakeTimers();
  vi.stubGlobal("matchMedia", vi.fn(() => ({ matches: reducedMotion })));
  return render(<OilSection />);
}

function selectedOil() {
  return screen.getAllByRole("button").find(button => button.getAttribute("aria-pressed") === "true")?.getAttribute("aria-label");
}

describe("Body oil carousel", () => {
  it("advances every 3000 milliseconds and loops through all three oils", () => {
    setup();
    expect(selectedOil()).toBe("Show Unscented body oil");
    act(() => { vi.advanceTimersByTime(2999); });
    expect(selectedOil()).toBe("Show Unscented body oil");
    act(() => { vi.advanceTimersByTime(1); });
    expect(selectedOil()).toBe("Show Vanilla Bean body oil");
    act(() => { vi.advanceTimersByTime(3000); });
    expect(selectedOil()).toBe("Show Mahogany Teakwood body oil");
    act(() => { vi.advanceTimersByTime(3000); });
    expect(selectedOil()).toBe("Show Unscented body oil");
  });

  it("does not auto-advance when reduced motion is requested", () => {
    setup(true);
    act(() => { vi.advanceTimersByTime(6000); });
    expect(selectedOil()).toBe("Show Unscented body oil");
    expect(vi.getTimerCount()).toBe(0);
  });

  it("clears the carousel timer when leaving the page", () => {
    const view = setup();
    expect(vi.getTimerCount()).toBe(1);
    view.unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
