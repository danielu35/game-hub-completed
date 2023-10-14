import useTrailer from "../hooks/useTrailer";

interface Props {
  gameId: number;
}

const Trailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data.max} poster={first.preview} controls />
  ) : null;
};

export default Trailer;
