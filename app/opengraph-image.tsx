import { ImageResponse } from "next/og";

export const alt =
  "JININSA TECHNOLOGY — Enterprise Software Engineering, AI & Cloud-Native Systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            color: "#94a3b8",
            border: "1px solid #334155",
            borderRadius: 9999,
            padding: "10px 28px",
            alignSelf: "flex-start",
            background: "rgba(15, 23, 42, 0.8)",
          }}
        >
          🇨🇦 Canadian Owned & Registered Entity
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: 48,
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 700, color: "#ffffff" }}>
            JININSA
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: "#22d3ee",
              marginLeft: 20,
              letterSpacing: 6,
            }}
          >
            TECHNOLOGY
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 40,
            color: "#cbd5e1",
            lineHeight: 1.3,
          }}
        >
          Enterprise Software Engineering, AI & Cloud-Native Systems
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 26,
            color: "#64748b",
          }}
        >
          jininsa.com · British Columbia, Canada
        </div>
      </div>
    ),
    { ...size }
  );
}
