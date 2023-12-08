import { Metadata } from "next";
import Router from "./router"

export const metadata: Metadata = {
  description: "Don't you love some chicken?",
  keywords: [
    "chicken",
    "google",
    "free money",
    "league of legends",
    "wow i want some kfc",
    "charity",
    "cat pictures",
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
  title: "Route11",
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
