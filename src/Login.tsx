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

export default function Login() {
  return (
    <VStack
      flex={1}
      backgroundColor={THEMES.colors.primary}
      alignItems={"center"}
      p={5}
    >
      <Image source={logoDef} alt={"logo"} />

      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={THEMES.colors.secondary}
        textAlign="center"
        mt={5}
      >
        Login
      </Text>
      <Box mt={5}>
        <FormControl mt={3}>
          <FormControl.Label>Usuário</FormControl.Label>
          <Input
            placeholder="Digite seu usuário"
            size="lg"
            borderRadius="lg"
            bgColor="gray.100"
            width="100%"
            shadow={3}
          />
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder="Digite sua senha"
            size="lg"
            borderRadius="lg"
            bgColor="gray.100"
            width="100%"
            shadow={3}
            type="password"
          />
        </FormControl>
        <Button mt={5} bgColor={THEMES.colors.secondary} borderRadius="lg">
          Entrar
        </Button>
      </Box>

      <Box mt={3}>
        <Link href="#" textAlign="center">
          Esqueceu sua senha?
        </Link>
      </Box>
      <Box mt={3} w="100%" flexDirection="row" justifyContent="center">
        <Text fontSize={"sm"}>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color={THEMES.colors.secondary}>Faça seu cadastro</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
