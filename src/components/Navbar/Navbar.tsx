import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack marginY={3}>
      <Link to={"/"}>
        <Image src={logo} boxSize="60px" objectFit={"contain"}></Image>
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
