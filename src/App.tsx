import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import Aside from "./components/Aside/Aside";
import GameGrid from "./components/GameGrid/GameGrid";
import GameHeading from "./components/Navbar/GameHeading";
import Navbar from "./components/Navbar/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
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
        <Navbar></Navbar>
      </GridItem>
      <Show above="sm">
        <GridItem paddingX={5} area={"aside"}>
          <Aside></Aside>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack marginBottom={2}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
