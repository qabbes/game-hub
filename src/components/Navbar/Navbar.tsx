import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px"></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
