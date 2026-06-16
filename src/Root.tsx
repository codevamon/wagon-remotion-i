import { Composition } from "remotion";
import { BrandVideo } from "./BrandVideo";
import {
  VIDEO_WIDTH,
  VIDEO_HEIGHT,
  VIDEO_FPS,
  DURATIONS,
  TRANSITION_FRAMES,
} from "./constants";

const f = (s: number) => Math.round(s * VIDEO_FPS);

const TOTAL_SCENE_FRAMES =
  f(DURATIONS.intro) +
  f(DURATIONS.kyemera) +
  f(DURATIONS.impulseBeans) +
  f(DURATIONS.superspoon) +
  f(DURATIONS.collaboration) +
  f(DURATIONS.stats) +
  f(DURATIONS.webDesign) +
  f(DURATIONS.services) +
  f(DURATIONS.process) +
  f(DURATIONS.impact) +
  f(DURATIONS.origin) +
  f(DURATIONS.outro);

// 13 transitions between 17 scenes (3 replaced with light leak overlays)
// Overlays do NOT shorten the timeline, only transitions do
// 1 fade (18f) + 10 standard transitions (20f) + 2 flip transitions (25f)
const FADE_INTRO_FLOW = 18;
const STANDARD_TRANSITION_COUNT = 10;
const FLIP_TRANSITION_COUNT = 2;
const FLIP_FRAMES = 25;
const TOTAL_OVERLAPS =
  FADE_INTRO_FLOW +
  STANDARD_TRANSITION_COUNT * TRANSITION_FRAMES +
  FLIP_TRANSITION_COUNT * FLIP_FRAMES;
const TOTAL_DURATION = TOTAL_SCENE_FRAMES - TOTAL_OVERLAPS;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="CreativlyBrandVideo"
        component={BrandVideo}
        durationInFrames={TOTAL_DURATION}
        fps={VIDEO_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
      />
    </>
  );
};
