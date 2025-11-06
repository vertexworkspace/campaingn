import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://vertexworkspace.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // allow everything
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
