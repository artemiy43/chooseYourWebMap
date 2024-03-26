export function getImageUrl(path) {
  const publicUrl = "/src/assets";
  return `${publicUrl}${path}`;
  // return `${publicUrl}/${path}`;
}
