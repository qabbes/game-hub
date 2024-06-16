import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      overflow="hidden"
      display="inline-block"
      _hover={{ transform: "scale(1.05)", transition: "transform 0.15s ease" }}
      transition="transform 0.15s ease"
      maxW="sm"
      borderRadius="lg"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
