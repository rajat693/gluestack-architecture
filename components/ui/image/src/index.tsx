import { MainImage } from "./MainImage";

export function createImage({ Root }: any) {
  const Image = MainImage(Root);

  Image.displayName = "Image";
  return Image;
}
