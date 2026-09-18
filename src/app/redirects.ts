export const dynamic = "force-static";

export default function redirects() {
  return [
    {
      source: "/Namayesh.html",
      destination: "/",
      permanent: false,
    },
    {
      source: "/mrtanz.xml",
      destination: "/sitemap.xml",
      permanent: true,
    },
  ];
}
