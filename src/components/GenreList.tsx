import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-url"
import useGameQueryStore from "../store"

const GenreList = () => {
  const { data, isLoading, error } = useGenres()
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId)
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId)

  if (error) return null

  if (isLoading) return <Spinner />
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
