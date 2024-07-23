import Register from "@/src/Register";

import { NativeBaseProvider, StatusBar } from "native-base";

import { THEMES } from "@/src/styles/themes";

export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.secondary} />
      <Register />
    </NativeBaseProvider>
  );
}
