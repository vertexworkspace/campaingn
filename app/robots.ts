import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bookings.vertexworkspace.com";

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
