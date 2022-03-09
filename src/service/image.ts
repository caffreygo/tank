import config from "../config";

export type ImageMapKey = keyof typeof config.images;
export const image = new Map<ImageMapKey, HTMLImageElement>();

export const promises = Object.entries(config.images).map(([key, value]) => {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.src = value;
    img.onload = () => {
      image.set(key as ImageMapKey, img);
      resolve(img);
    };
  });
});
