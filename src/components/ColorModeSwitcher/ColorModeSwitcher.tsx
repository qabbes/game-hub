import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack mr="10px">
      <Switch
        id="color-mode"
        size="md"
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontSize="sm" whiteSpace={"nowrap"}>
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwitcher;
