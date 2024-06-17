import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children?: string;
  maxChar: number;
}

const ExpandableText = ({ children, maxChar }: Props) => {
  const [expanded, setExpanded] = useState(false);
  if (!children) return null;

  const text = expanded ? children : children?.substring(0, maxChar) + "...";

  return (
    <>
      <Text fontSize={"sm"} paddingBlock={3}>
        {text}
        <Button
          marginLeft={1}
          size="xs"
          colorScheme="yellow"
          fontWeight={"bold"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : " Read More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
