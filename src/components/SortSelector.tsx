import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string;
  onSelectedSort: (sort: string) => void;
}

const SortSelector = ({ selectedSort, onSelectedSort }: Props) => {
  let selectorItems2 = new Map([
    [" ", "Relevance"],
    ["-added", "Date added"],
    ["name", "Name"],
    ["-released", "Release date"],
    ["-metacritic", "Popularity"],
    ["-rating", "Average Rating"],
  ]);

  const mapEntries = Object.fromEntries(selectorItems2);

  return (
    <Menu>
      <MenuButton marginLeft={2} as={Button} rightIcon={<BsChevronDown />}>
        {selectedSort ? "Order by : " + selectorItems2.get(selectedSort) : "Order by : Relevance"}
      </MenuButton>
      <MenuList>
        {Object.entries(mapEntries).map(([key, value]) => (
          <MenuItem key={key} value={key} onClick={() => onSelectedSort(key)}>
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
