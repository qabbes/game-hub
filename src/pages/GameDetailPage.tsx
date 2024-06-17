import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import getENdescription from "../services/slice-description";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!); // ! this constant will never be null
  const description = getENdescription(game?.description_raw);

  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText children={description} maxChar={300}></ExpandableText>
    </>
  );
};

export default GameDetailPage;
