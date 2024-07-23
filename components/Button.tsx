import { THEMES } from "@/src/styles/themes";

import { Button, IButtonProps } from "native-base";
import { ReactNode } from "react";

interface ButtonProps extends IButtonProps {
  children: ReactNode;
  autoSize?: boolean;
  color?: string;
}

export function Botao({
  children,
  autoSize = false,
  color,
  ...rest
}: ButtonProps) {
  return (
    <Button
      w={autoSize ? "auto" : "100%"}
      bg={color || THEMES.colors.secondary}
      mt={10}
      borderRadius="lg"
      _text={{ color: "white" }}
      {...rest}
    >
      {children}
    </Button>
  );
}
