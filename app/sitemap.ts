import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

const routes = ["", "/about", "/speaker", "/advisory", "/write", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.domain}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
