import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#16130f",
          padding: "90px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#c79a68",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#f7f1e8",
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 940,
          }}
        >
          {site.role} · TEDx Speaker
        </div>
        <div style={{ display: "flex", color: "#a79c90", fontSize: 26, marginTop: 36 }}>
          AI-led transformation · Leadership · The rise of Bharat
        </div>
      </div>
    ),
    { ...size }
  );
}
