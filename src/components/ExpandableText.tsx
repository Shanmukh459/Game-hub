import { Button, Text } from "@chakra-ui/react"
import React, { useState } from "react"

interface Props {
  children: string
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false)
  const limit = 300

  if (!children) return null

  if (children.length < limit) return <Text>{children}</Text>

  const description = expanded ? children : children.substring(limit) + "..."

  return (
    <Text>
      {description}
      <Button
        marginLeft={1}
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  )
}

export default ExpandableText
