import { useState } from "react";
import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        sm: '"nav nav" "aside main"',
        md: '"nav nav" "aside main"',
        lg: '"nav nav" "aside main"', //1024px
      }}
      gap="1"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"nav"}>
        <Navbar></Navbar>
      </GridItem>
      <Show above="sm">
        <GridItem pl="2" bg="pink.300" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
