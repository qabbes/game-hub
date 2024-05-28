import { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import Aside from "./components/Aside/Aside";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const handleSelectedGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
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
        <Navbar></Navbar>
      </GridItem>
      <Show above="sm">
        <GridItem paddingX={5} area={"aside"}>
          <Aside selectedGenre={gameQuery.genre} onSelectGenre={handleSelectedGenre}></Aside>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
