import React, { useEffect, useState } from "react";
import { animated } from "react-spring";
import { Flex } from "@theme-ui/components";

const AnimatedTitle = () => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const characters = ["F", "A", "N", "G", "A"];

  return (
    <h1 sx={{ justifyContent: "center" }}>
      <h1>
        {characters.map((character) => (
          <animated.span key={character}>{character}</animated.span>
        ))}
      </h1>
    </Flex>
  );
};

export default AnimatedTitle;
