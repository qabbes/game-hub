import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside/Aside";
import GameGrid from "./components/GameGrid/GameGrid";
import GameHeading from "./components/Navbar/GameHeading";
import Navbar from "./components/Navbar/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [selectedSort, setSelectedSort] = useState("");

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        sm: '"nav nav" "aside main"',
        md: '"nav nav" "aside main"',
        lg: '"nav nav" "aside main"', //1024px
      }}
      gap="1"
      templateColumns={{
        base: "1fr",
        sm: "200px 1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"} paddingX={3}>
        <Navbar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}></Navbar>
      </GridItem>
      <Show above="sm">
        <GridItem paddingX={5} area={"aside"}>
          <Aside
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          ></Aside>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack marginBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              selectedSort={selectedSort}
              onSelectedSort={(sortOrder) => {
                setSelectedSort(sortOrder);
                setGameQuery({ ...gameQuery, sortOrder });
              }}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
