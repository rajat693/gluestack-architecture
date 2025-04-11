import { Button as ButtonMain } from "./Button";
import { ButtonText } from "./ButtonText";

export function createButton({ Root, Text }: any) {
  const Button = ButtonMain(Root) as any;
  Button.Text = ButtonText(Text);

  Button.displayName = "Button";
  Button.Text.displayName = "Button.Text";

  return Button;
}
