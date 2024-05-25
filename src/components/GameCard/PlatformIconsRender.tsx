import React from "react";
import { SiPlaystation5 } from "react-icons/si";
import { RiPlaystationLine, RiWindowsFill } from "react-icons/ri";
import { FaXbox, FaApple, FaAppStoreIos, FaAndroid } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { FaLinux } from "react-icons/fa6";
import { VscTerminalLinux } from "react-icons/vsc";
import { Platform } from "../../hooks/useGames";
import { HStack } from "@chakra-ui/react";

interface Props {
  parent_platforms: { platform: Platform }[];
}

function platformDisplay(platform: Platform) {
  var platformId = platform.id;
  switch (platformId) {
    case 1:
      return <RiWindowsFill />;
    case 2:
      return <RiPlaystationLine />;
    case 3:
      return <FaXbox />;
    case 4:
      return <FaAppStoreIos />;
    case 5:
      return <FaApple />;
    case 6:
      return <VscTerminalLinux />;
    case 7:
      return <BsNintendoSwitch />;
    case 8:
      return <FaAndroid />;
  }
}

const PlatformIconsRender = ({ parent_platforms }: Props) => {
  return (
    <HStack justifyContent="space-between" color="gray.500" mt={1}>
      {parent_platforms.map(({ platform }) => platformDisplay(platform))}
    </HStack>
  );
};

export default PlatformIconsRender;
