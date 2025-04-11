import React, { forwardRef, useMemo, useState } from "react";
import { ButtonContext } from "./Context";

export const Button = (StyledButton: any) => {
  const MyComponent = forwardRef(
    (
      {
        children,
        isDisabled,
        isHovered: isHoveredProp,
        isPressed: isPressedProp,
        isFocused: isFocusedProp,
        isFocusVisible: isFocusVisibleProp,
        styledButton,
        ...props
      }: any,
      ref?: any
    ) => {
      const [isHovered, setIsHovered] = useState(false);
      const [isFocused, setIsFocused] = useState(false);
      const [isPressed, setIsPressed] = useState(false);
      const [isFocusVisible, setIsFocusVisible] = useState(false);

      const contextValue = useMemo(() => {
        return {
          hover: isHoveredProp || isHovered,
          focus: isFocusedProp || isFocused,
          active: isPressedProp || isPressed,
          disabled: isDisabled,
          focusVisible: isFocusVisibleProp || isFocusVisible,
        };
      }, [
        isHovered,
        isHoveredProp,
        isFocused,
        isFocusedProp,
        isPressed,
        isPressedProp,
        isDisabled,
        isFocusVisible,
        isFocusVisibleProp,
      ]);

      return (
        <ButtonContext.Provider value={contextValue}>
          <StyledButton
            ref={ref}
            // states={{
            //   hover: isHoveredProp || isHovered,
            //   focus: isFocusedProp || isFocused,
            //   active: isPressedProp || isPressed,
            //   disabled: isDisabled,
            //   focusVisible: isFocusVisibleProp || isFocusVisible,
            // }}
            dataSet={{
              hover: isHoveredProp || isHovered ? "true" : "false",
              focus: isFocusedProp || isFocused ? "true" : "false",
              active: isPressedProp || isPressed ? "true" : "false",
              disabled: isDisabled ? "true" : "false",
              focusVisible:
                isFocusVisibleProp || isFocusVisible ? "true" : "false",
            }}
            disabled={isDisabled}
            {...props}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          >
            {children}
          </StyledButton>
        </ButtonContext.Provider>
      );
    }
  );

  return MyComponent;
};
