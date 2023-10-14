import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenShot";

interface Props {
  gameId: number;
}

const ScreenShots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenShot(gameId);

  if (isLoading) return null;
  if (error) throw error;

   return (
     <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
       {data?.results.map((file: any) => (
         <Image key={file.id} src={file.image} />
       ))}
     </SimpleGrid>
   );
};

export default ScreenShots;
