import React from "react";
import { createImage } from "./src";
import { Image as RNImage } from "react-native";

const UIImage = createImage({ Root: RNImage });

const Image = React.forwardRef(({ size = 100, ...props }: any, ref: any) => {
  return <UIImage size={size} {...props} ref={ref} />;
});

Image.displayName = "Image";
export { Image };
