import { Container, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import ScreenShots from "../components/ScreenShots";
import Trailer from "../components/Trailer";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }}>
      <Container>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Container>
      <Container>
        <Trailer gameId={game?.id} />
        <ScreenShots gameId={game?.id} />
      </Container>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
