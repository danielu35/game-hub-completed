import { Button, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  children?: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expand, setExpand] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expand ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size={"xs"}
        colorScheme="yellow"
        fontWeight={"bold"}
        marginLeft={2}
        onClick={() => setExpand(!expand)}
      >
        {expand ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;