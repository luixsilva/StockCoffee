import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";

import { TouchableOpacity } from "react-native";
import { THEMES } from "./styles/themes";

import logoDef from "./assets/logoDef.png";
import { Touchable } from "react-native";
import { Title } from "@/components/Title";
import { InputField } from "@/components/Input";
import { Botao } from "@/components/Button";

export default function Register() {
  return (
    <VStack
      flex={1}
      backgroundColor={THEMES.colors.primary}
      alignItems={"center"}
      p={5}
    >
      <Image source={logoDef} alt={"logo"} />

      <Title>Faça seu Cadastro</Title>
      <Box mt={5}>
        <FormControl mt={3}>
          <InputField placeholder="Digite seu usuário" label="Usuário" />
          <InputField
            placeholder="Digite sua senha"
            label="Senha"
            secureTextEntry
          />
          <InputField
            placeholder="Repita sua senha"
            label="Senha"
            secureTextEntry
          />
        </FormControl>
        <Botao autoSize>Registrar</Botao>
      </Box>
    </VStack>
  );
}
