import React from "react"
import useScreeshots from "../hooks/useScreenshots"
import { Image, SimpleGrid } from "@chakra-ui/react"

interface Props {
  gameId: number
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreeshots(gameId)

  if (isLoading) return null
  if (error) throw error

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} marginTop={2}>
      {data?.results.map((item) => (
        <Image key={item.id} src={item.image} />
      ))}
    </SimpleGrid>
  )
}

export default GameScreenshots
