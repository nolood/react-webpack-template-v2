import { lazy } from "react";

export const MainPage = lazy(async () => await import("./main"));
export const OtherPage = lazy(async () => await import("./other"));
