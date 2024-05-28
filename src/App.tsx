import { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import GameGrid from "./components/GameGrid/GameGrid";
import Aside from "./components/Aside/Aside";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const handleSelectedGenre = (selectedGenre: Genre) => {
    setSelectedGenre(selectedGenre);
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
          <Aside selectedGenre={selectedGenre} onSelectGenre={handleSelectedGenre}></Aside>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={setSelectedPlatform} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </GridItem>
    </Grid>
  );
}

export default App;
