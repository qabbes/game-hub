import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const ErrorPage = () => {
  const routeError = useRouteError();

  return (
    <>
      <Navbar />
      <Box marginStart={2}>
        <Heading>Oops...</Heading>
        <Text marginY={1}>
          {isRouteErrorResponse(routeError)
            ? "This page does not exist"
            : "An unexpected error occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
