import React from "react";
import { createButton } from "./src";
import { tva } from "@gluestack-ui/nativewind-utils/tva";
import {
  withStyleContext,
  useStyleContext,
} from "@gluestack-ui/nativewind-utils/withStyleContext";
import { Pressable, Text } from "react-native";

const SCOPE = "BUTTON";

const Root = withStyleContext(Pressable, SCOPE);

const UIButton = createButton({
  Root: Root,
  Text,
});

const buttonStyle = tva({
  base: "group/button rounded bg-primary-500 flex-row items-center justify-center data-[focus-visible=true]:web:outline-none data-[focus-visible=true]:web:ring-2 data-[disabled=true]:opacity-40 gap-2",
  variants: {
    action: {
      primary:
        "bg-primary-500 data-[hover=true]:bg-primary-600 data-[active=true]:bg-primary-700 border-primary-300 data-[hover=true]:border-primary-400 data-[active=true]:border-primary-500 data-[focus-visible=true]:web:ring-indicator-info",
      secondary:
        "bg-secondary-500 border-secondary-300 data-[hover=true]:bg-secondary-600 data-[hover=true]:border-secondary-400 data-[active=true]:bg-secondary-700 data-[active=true]:border-secondary-700 data-[focus-visible=true]:web:ring-indicator-info",
    },
    variant: {
      link: "px-0",
      outline:
        "bg-transparent border data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
      solid: "",
    },

    size: {
      xs: "px-3.5 h-8",
      sm: "px-4 h-9",
      md: "px-5 h-10",
      lg: "px-6 h-11",
      xl: "px-7 h-12",
    },
  },
  compoundVariants: [
    {
      action: "primary",
      variant: "link",
      class:
        "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "secondary",
      variant: "link",
      class:
        "px-0 bg-transparent data-[hover=true]:bg-transparent data-[active=true]:bg-transparent",
    },
    {
      action: "primary",
      variant: "outline",
      class:
        "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-transparent",
    },
    {
      action: "secondary",
      variant: "outline",
      class:
        "bg-transparent data-[hover=true]:bg-background-50 data-[active=true]:bg-red-500",
    },
  ],
});

const buttonTextStyle = tva({
  base: "text-typography-0 font-semibold web:select-none",
  parentVariants: {
    action: {
      primary:
        "text-primary-600 data-[hover=true]:text-primary-600 data-[active=true]:text-primary-700",
      secondary:
        "text-typography-500 data-[hover=true]:text-typography-600 data-[active=true]:text-typography-700",
    },
    variant: {
      link: "data-[hover=true]:underline data-[active=true]:underline",
      outline: "",
      solid:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
  parentCompoundVariants: [
    {
      variant: "solid",
      action: "primary",
      class:
        "text-typography-0 data-[hover=true]:text-typography-0 data-[active=true]:text-typography-0",
    },
    {
      variant: "solid",
      action: "secondary",
      class:
        "text-typography-800 data-[hover=true]:text-typography-800 data-[active=true]:text-typography-800",
    },
    {
      variant: "outline",
      action: "primary",
      class:
        "text-primary-500 data-[hover=true]:text-primary-500 data-[active=true]:text-primary-500",
    },
    {
      variant: "outline",
      action: "secondary",
      class:
        "text-typography-500 data-[hover=true]:text-primary-600 data-[active=true]:text-typography-700",
    },
  ],
});

const Button = React.forwardRef(
  (
    {
      className,
      variant = "solid",
      size = "md",
      action = "primary",
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <UIButton
        ref={ref}
        {...props}
        className={buttonStyle({ variant, size, action, class: className })}
        context={{ variant, size, action }}
      />
    );
  }
);

const ButtonText = React.forwardRef(
  ({ className, variant, size, action, ...props }: any, ref: any) => {
    const {
      variant: parentVariant,
      size: parentSize,
      action: parentAction,
    } = useStyleContext(SCOPE);

    return (
      <UIButton.Text
        ref={ref}
        {...props}
        className={buttonTextStyle({
          parentVariants: {
            variant: parentVariant,
            size: parentSize,
            action: parentAction,
          },
          variant,
          size,
          action,
          class: className,
        })}
      />
    );
  }
);

Button.displayName = "Button";
ButtonText.displayName = "ButtonText";

export { Button, ButtonText };
