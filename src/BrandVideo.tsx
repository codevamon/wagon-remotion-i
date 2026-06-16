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
import { FlowDemoScene } from "./scenes/FlowDemoScene";
import { TemplatesScene } from "./scenes/TemplatesScene";
import { FocusedDemoScene } from "./scenes/FocusedDemoScene";
import { CollaborationScene } from "./scenes/CollaborationScene";
import { ModelsScene } from "./scenes/ModelsScene";
import { TextGenerationScene } from "./scenes/TextGenerationScene";
import { StylePresetsScene } from "./scenes/StylePresetsScene";
import { EditorScene } from "./scenes/EditorScene";
import { PerformanceScene } from "./scenes/PerformanceScene";
import { OpenSourceScene } from "./scenes/OpenSourceScene";
import { OutroScene } from "./scenes/OutroScene";

const f = (seconds: number) => Math.round(seconds * VIDEO_FPS);

export const BrandVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#000" }}>
      <TransitionSeries>
        {/* 1. INTRO (BLACK) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.intro)}>
          <IntroScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 18 })}
        />


        {/* 4. COLLABORATION (WHITE) */}
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

        {/* 5. MODELS (BLACK) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.stats)}>
          <ModelsScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-top" })}
          timing={springTiming({ config: { damping: 200 } })}
        />

        {/* 6. TEXT GEN (WHITE) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.webDesign)}>
          <TextGenerationScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 7. STYLE PRESETS (BLACK) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.services)}>
          <StylePresetsScene />
        </TransitionSeries.Sequence>

        {/* Light Leak: Recorder -> Editor (warm golden) */}
        <TransitionSeries.Overlay durationInFrames={30}>
          <LightLeak seed={7} hueShift={45} />
        </TransitionSeries.Overlay>

        {/* 10. EDITOR (WHITE) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.process)}>
          <EditorScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={flip({ direction: "from-left" })}
          timing={springTiming({
            config: { damping: 200 },
            durationInFrames: 25,
          })}
        />

        {/* 14. PERFORMANCE (WHITE) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.impact)}>
          <PerformanceScene />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: TRANSITION_FRAMES })}
        />

        {/* 15. OPEN SOURCE (DARK #0D1117) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.origin)}>
          <OpenSourceScene />
        </TransitionSeries.Sequence>

        {/* Light Leak: OpenSource -> Outro (golden yellow finale) */}
        <TransitionSeries.Overlay durationInFrames={35}>
          <LightLeak seed={1} hueShift={50} />
        </TransitionSeries.Overlay>

        {/* 16. OUTRO (BLACK) */}
        <TransitionSeries.Sequence durationInFrames={f(DURATIONS.outro)}>
          <OutroScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
