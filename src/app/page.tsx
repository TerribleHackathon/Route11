import { Metadata } from "next";
import Router from "./router"

export const metadata: Metadata = {
  description: "Your next betting assistant",
  keywords: [
    "betting",
    "gambling",
    "free money",
    "league of legends",
    "gambling",
    "tailing service",
    "tail",
  ],
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#F7F8FB",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#090F15"
    },
  ],
  title: "Silva",
  manifest: "/manifest.json",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
    {
      sizes: "16x16",
      url: "/icons/favicon-16x16.png",
      type: "image/png",
      rel: "icon",
    },
    {
      sizes: "32x32",
      url: "/icons/favicon-32x32.png",
      type: "image/png",
      rel: "icon",
    },
  ],
};

export default function Home() {
  return (
    <Router/>
  )
}
