import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitcher from "../ColorModeSwitcher/ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default Navbar;
