import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Img,
  staticFile,
} from "remotion";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { COLORS } from "../constants";

const { fontFamily: fontDisplay } = loadAnton();
const { fontFamily: fontBody } = loadInter();

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerSpr = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80, mass: 0.6 },
  });
  const headerY = interpolate(headerSpr, [0, 1], [12, 0]);

  const line1Spr = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80, mass: 0.6 },
  });
  const line1Y = interpolate(line1Spr, [0, 1], [28, 0]);

  const line2Spr = spring({
    frame: Math.max(0, frame - 28),
    fps,
    config: { damping: 8, stiffness: 120, mass: 0.4 },
  });
  const line2Y = interpolate(line2Spr, [0, 1], [24, 0]);

  const footerSpr = spring({
    frame: Math.max(0, frame - 14),
    fps,
    config: { damping: 14, stiffness: 80, mass: 0.5 },
  });
  const footerY = interpolate(footerSpr, [0, 1], [10, 0]);

  const headlineStyle = {
    fontFamily: fontDisplay,
    fontSize: 46,
    lineHeight: 0.95,
    letterSpacing: "-0.01em",
    color: "#191919",
    fontWeight: 400,
    textTransform: "lowercase" as const,
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.bgWhite,
        padding: 56,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          opacity: headerSpr,
          transform: `translateY(${headerY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: fontBody,
            fontSize: 74,
            color: "#191919",
          }}
        >
          <Img src={staticFile("logo-white.png")} style={{ width: 180, filter: "invert(1)" }} />
        </div>
        <div
          style={{
            fontFamily: fontBody,
            fontSize: 25,
            color: "#5f5e5a",
          }}
        >
          wagondesignstudio.com
        </div>
      </div>

      {/* Central copy */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 48,
        }}
      >
        <div
          style={{
            maxWidth: "86%",
            alignSelf: "flex-start",
            opacity: line1Spr,
            transform: `translateY(${line1Y}px)`,
          }}
        >
          <div style={headlineStyle}>anyone can make something now.</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              maxWidth: "60%",
              textAlign: "right",
              opacity: line2Spr,
              transform: `translateY(${line2Y}px)`,
            }}
          >
            <div style={{ ...headlineStyle, fontStyle: "italic" }}>
              almost no one makes it matter.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #191919",
          paddingTop: 14,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          opacity: footerSpr,
          transform: `translateY(${footerY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: fontBody,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#191919",
          }}
        >
          a wagon studio film
        </div>
        <div
          style={{
            fontFamily: fontBody,
            fontSize: 11,
            fontStyle: "italic",
            color: "#5f5e5a",
          }}
        >
          2026
        </div>
      </div>
    </AbsoluteFill>
  );
};
