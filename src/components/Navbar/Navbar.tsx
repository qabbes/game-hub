import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="50px"></Image>
      <Text>KATRINIUŚ</Text>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
