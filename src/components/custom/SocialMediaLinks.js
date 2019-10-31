import React from "react";

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { ScreenReaderOnly } from "@innocuous/components";
import { LinkButton } from "../";
import FacebookLogo from "../../images/facebook.svg";
import InstagramLogo from "../../images/instagram.svg";
import SoundcloudLogo from "../../images/soundcloud.svg";
import TwitterLogo from "../../images/twitter.svg";

const socialMediaVariants = {
  Soundcloud: {
    url: "https://soundcloud.com/bgf5676",
    icon: SoundcloudLogo,
  },
  Facebook: {
    url: "https://facebook.com/bgf5676",
    icon: FacebookLogo,
  },
  Twitter: {
    url: "https://twitter.com/bgf5676",
    icon: TwitterLogo,
  },
  Instagram: {
    url: "https://instagram.com/bgf5676",
    icon: InstagramLogo,
  },
};

const SocialMediaLinks = () => {
  const links = Object.keys(socialMediaVariants).map((variantName) => {
    const Icon = socialMediaVariants[variantName].icon;

    return (
      <LinkButton
        href={socialMediaVariants[variantName].url}
        key={variantName}
        mx={1}
      >
        <Icon style={{ width: "30px", height: "30px" }} />
        <ScreenReaderOnly>{variantName}</ScreenReaderOnly>
      </LinkButton>
    );
  });

  return <Flex sx={{ justifyContent: "center" }}>{links}</Flex>;
};

export default SocialMediaLinks;
