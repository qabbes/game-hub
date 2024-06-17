import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms from "../hooks/usePlatforms";

import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import Platform from "../entities/Platform";

const PlatformSelector = () => {
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const clearSelectedPlatform = useGameQueryStore((s) => s.clearPlatform);

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platformSelected = usePlatform(selectedPlatformId);
  const currentGameQuery = useGameQueryStore((s) => s.gameQuery);

  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformSelected?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() =>
            clearSelectedPlatform(
              currentGameQuery.genreId,
              currentGameQuery.searchText,
              currentGameQuery.sortOrder
            )
          }
        >
          All
        </MenuItem>
        {platforms?.results.map((platform: Platform) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platform?.id)}
            key={platform?.id}
          >
            {platform?.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
