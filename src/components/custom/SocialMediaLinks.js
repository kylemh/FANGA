/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "@theme-ui/components";
import { ScreenReaderOnly } from "@innocuous/components";
import { LinkButton } from "../";
import FacebookLogo from "../../images/facebook.svg";
import InstagramLogo from "../../images/instagram.svg";
import SoundcloudLogo from "../../images/soundcloud.svg";

const socialMediaVariants = {
  Soundcloud: {
    url: "https://soundcloud.com/bgf5676",
    icon: SoundcloudLogo,
  },
  Facebook: {
    url: "https://facebook.com/DJFANGA1",
    icon: FacebookLogo,
  },
  Instagram: {
    url: "https://instagram.com/fangaofficial",
    icon: InstagramLogo,
  },
};

const responsiveSizes = ["25px", "30px", "40px"];

const SocialMediaLinks = () => {
  const links = Object.keys(socialMediaVariants).map((variantName) => {
    const Icon = socialMediaVariants[variantName].icon;

    return (
      <LinkButton href={socialMediaVariants[variantName].url} key={variantName} mx={1}>
        <Icon sx={{ width: responsiveSizes, height: responsiveSizes }} />
        <ScreenReaderOnly>{variantName}</ScreenReaderOnly>
      </LinkButton>
    );
  });

  return <Flex sx={{ justifyContent: "center" }}>{links}</Flex>;
};

export default SocialMediaLinks;
