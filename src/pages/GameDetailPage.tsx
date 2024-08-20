import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame"
import { Button, Heading, Spinner, Text } from "@chakra-ui/react"
import { useState } from "react"
import ExpandableText from "../components/ExpandableText"

const GameDetailPage = () => {
  const { slug } = useParams()
  const [showLess, setShowLess] = useState(true)
  const { data: game, error, isLoading } = useGame(slug!)

  const description = showLess
    ? game?.description_raw.substring(300) + "..."
    : game?.description_raw
  const buttonText = showLess ? "Show more" : "Show Less"

  if (isLoading) return <Spinner />
  if (error || !game) throw error
  console.log(game)

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  )
}

export default GameDetailPage
