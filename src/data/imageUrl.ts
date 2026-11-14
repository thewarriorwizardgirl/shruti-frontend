import { cloudinaryImageMap } from "./cloudinaryImageMap";

export function getImageUrl(path: string): string {
  return cloudinaryImageMap[path] ?? path;
}
