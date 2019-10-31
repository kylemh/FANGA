/** @jsx jsx */
import { jsx } from "theme-ui";
import { animated, useTrail } from "react-spring";
import { Flex } from "@theme-ui/components";

const AnimatedTitle = ({ title = "FANGA" }) => {
  const characters = Array.from(title);

  const config = { mass: 10, tension: 400, friction: 200 };

  const trail = useTrail(characters.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <Flex sx={{ justifyContent: "center" }}>
      <h1>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.span
            key={`${index}${characters[index]}`}
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}
            sx={{ variant: "styles.h1" }}
          >
            {characters[index]}
          </animated.span>
        ))}
      </h1>
    </Flex>
  );
};

export default AnimatedTitle;
