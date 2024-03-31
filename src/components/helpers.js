export function getImageUrl(path) {
  const publicUrl = "../assets";
  return `${publicUrl}${path}`;
  // return `${publicUrl}/${path}`;
}

export const frameworks = [
  "react",
  "vue",
  "angular",
  "ember",
  "next",
  "remix",
  "svelteKit",
];

export const dataFormats = [
  "GeoJSON",
  "TopoJSON",
  "GeoRSS",
  "KML",
  "KMZ",
  "GML",
  "GPX",
  "CZML",
  "gITF",
];
