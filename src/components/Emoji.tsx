import React from "react";
import bullsEyes from "./../assets/bulls-eye.webp";
import meh from "./../assets/meh.webp";
import thumbsUp from "./../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "15px" },
    5: { src: bullsEyes, alt: "exceptionnal", boxSize: "20px" },
  };
  if (rating < 3) return null;

  return <Image {...emojiMap[rating]}></Image>;
};

export default Emoji;
