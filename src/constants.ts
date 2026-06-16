import { Easing } from "remotion";

export const VIDEO_WIDTH = 1920;
export const VIDEO_HEIGHT = 1080;
export const VIDEO_FPS = 30;

export const COLORS = {
  bg: "#0A0A0A",
  bgWhite: "#F5F2EB",
  bgGrid: "#1a1a1a",
  bgSurface: "#111111",
  bgSurfaceLight: "#EDEAE0",
  border: "rgba(0,0,0,0.12)",
  borderDark: "rgba(0,0,0,0.08)",
  borderBright: "rgba(0,0,0,0.25)",
  text: "#ffffff",
  textBlack: "#0A0A0A",
  textMuted: "#6b6b6b",
  textMutedDark: "#888888",
  textDim: "#999999",
  primary: "#0A0A0A",
  secondary: "#0A0A0A",
  accent: "#0A0A0A",
  success: "#0A0A0A",
  warning: "#0A0A0A",
  brand: "#0A0A0A",
  brandLight: "#F5F2EB",
  brandDark: "#0A0A0A",
  brandCyan: "#0A0A0A",
  glass: "rgba(245,242,235,0.85)",
  glassLight: "rgba(245,242,235,0.9)",
};

export const DURATIONS = {
  intro: 3.5,
  stats: 5.5,
  services: 4,
  webDesign: 3.5,
  impact: 2.5,
  collaboration: 3,
  impulseBeans: 4,
  process: 3.5,
  origin: 3.5,
  superspoon: 4,
  kyemera: 4,
  outro: 4,
};

export const TRANSITION_FRAMES = 20;

export const EASING = {
  elastic: Easing.bezier(0.1, 0.9, 0.2, 1),
  cinematic: Easing.bezier(0.22, 1, 0.36, 1),
  exp: Easing.bezier(0.19, 1, 0.22, 1),
  linear: Easing.linear,
};
