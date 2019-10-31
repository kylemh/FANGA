/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components"

const LinkButton = ({ variant = "primary", href, sx, ...props }) => {
  const isExternalLink = href.startsWith("http");

  return (
    <Box
      as="a"
      sx={{
        appearance: "none",
        display: "block",
        textAlign: "center",
        lineHeight: "inherit",
        textDecoration: "none",
        fontSize: "inherit",
        fontWeight: "bold",
        px: 3,
        py: 2,
        border: 0,
        borderRadius: 4,
        variant: `buttons.${variant}`,
        ...sx,
      }}
      href={href}
      rel={isExternalLink ? "noopener noreferrer" : undefined}
      target={isExternalLink ? "_blank" : undefined}
      {...props}
    />
  );
};

export default LinkButton;
