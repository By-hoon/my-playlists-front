import React from "react";
import { PlayBoxProps } from "../shared/Props";

const PlayBox: React.FC<PlayBoxProps> = ({ children }) => {
  return <div className="play-box__container">{children}</div>;
};

export default PlayBox;
