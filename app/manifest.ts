import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Divine Dickson-Uwakwe Portfolio",
    short_name: "Divine DD",
    description: "Software engineering, full-stack development, and applied AI projects by Divine Dickson-Uwakwe.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf8ff",
    theme_color: "#2563eb",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
