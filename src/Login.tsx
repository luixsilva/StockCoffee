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

export default function Login() {
  return (
    <VStack
      flex={1}
      backgroundColor={THEMES.colors.primary}
      alignItems={"center"}
      p={5}
    >
      <Image source={logoDef} alt={"logo"} />

      <Title>Faça seu Login</Title>
      <Box mt={5}>
        <FormControl mt={3}>
          <InputField placeholder="Digite seu usuário" label="Usuário" />
          <InputField
            placeholder="Digite sua senha"
            label="Senha"
            secureTextEntry
          />
        </FormControl>
        <Botao autoSize>Entrar</Botao>
      </Box>

      <Box mt={3}>
        <Link href="#" textAlign="center">
          Esqueceu sua senha?
        </Link>
      </Box>
      <Box mt={8} w="100%" flexDirection="row" justifyContent="center">
        <Text fontSize={"sm"}>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color={THEMES.colors.secondary}> Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
