import React, { forwardRef } from "react";
import { View } from "react-native";

export const MainImage = (StyledImage: any) => {
  const MyComponent = forwardRef(({ ...props }: any, ref?: any) => {
    return (
      <View
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: "red",
        }}
      />
    );

    return (
      <StyledImage
        source={props.source}
        style={{ width: props.size, height: props.size }}
        alt={"image"}
        ref={ref}
      />
    );
  });

  return MyComponent;
};
