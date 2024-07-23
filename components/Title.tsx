import { THEMES } from "@/src/styles/themes";
import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface TitleProps extends ITextProps {
  children: ReactNode;
}

export const Title = ({ children, ...rest }: TitleProps) => {
  return (
    <Text
      fontSize="2xl"
      fontWeight="bold"
      color={THEMES.colors.secondary}
      textAlign="center"
      mt={5}
      {...rest}
    >
      {children}
    </Text>
  );
};
