import { AbsoluteFill } from "remotion";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { flip } from "@remotion/transitions/flip";
import { LightLeak } from "@remotion/light-leaks";
import { VIDEO_FPS, DURATIONS, TRANSITION_FRAMES } from "./constants";

import { IntroScene } from "./scenes/IntroScene";
import { StylePresetsScene } from "./scenes/StylePresetsScene";
import { FocusedDemoScene } from "./scenes/FocusedDemoScene";
import { PerformanceScene } from "./scenes/PerformanceScene";
import { CollaborationScene } from "./scenes/CollaborationScene";
import { ModelsScene } from "./scenes/ModelsScene";
import { EditorScene } from "./scenes/EditorScene";
import { OpenSourceScene } from "./scenes/OpenSourceScene";
import { OutroScene } from "./scenes/OutroScene";

const f = (seconds: number) => Math.round(seconds * VIDEO_FPS);

export const BrandVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <TransitionSeries>
        {/* 1. INTRO */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.intro)}>
          <IntroScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 18 })}
        />

        {/* 2. STYLE PRESETS */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.services)}>
          <StylePresetsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Overlay durationInFrames={30}>
          <LightLeak seed={7} hueShift={45} />
        </TransitionSeries.Overlay>

        {/* 3. FOCUSED DEMO */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.webDesign)}>
          <FocusedDemoScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={flip({ direction: "from-left" })}
          timing={springTiming({
            config: { damping: 200 },
            durationInFrames: 25,
          })}
        />

        {/* 4. PERFORMANCE */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.impact)}>
          <PerformanceScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 5. COLLABORATION */}
        <TransitionSeries.Sequence
          durationInFrames={f(DURATIONS.collaboration)}
        >
          <CollaborationScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={flip({ direction: "from-right" })}
          timing={springTiming({
            config: { damping: 200 },
            durationInFrames: 25,
          })}
        />

        {/* 6. MODELS */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.stats)}>
          <ModelsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-top" })}
          timing={springTiming({ config: { damping: 200 } })}
        />

        {/* 7. EDITOR */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.process)}>
          <EditorScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 8. OPEN SOURCE */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.origin)}>
          <OpenSourceScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Overlay durationInFrames={35}>
          <LightLeak seed={1} hueShift={50} />
        </TransitionSeries.Overlay>

        {/* 9. OUTRO */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.outro)}>
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
