import React from "react";
import {
  DateBlock,
  HeaderBlock,
  ImageBlock,
  TextBlock,
  TitleBlock,
} from "../../../components/Blocks/index";
import { BlogPost } from "../../../components/BlogPost";
import { getImagePath } from "../../../utils/getImagePath";

export const GraphBlog = () => {
  const local = "GraphBlog";
  return (
    <BlogPost>
      <TitleBlock>Graph Problems and State Machines</TitleBlock>
      <DateBlock>August 10, 2020</DateBlock>

      <HeaderBlock>Introduction</HeaderBlock>
      <TextBlock>
        meeep meeeep meeeep <a href="google.com">Meep</a> meeeep meeeep meeeep
        meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep
        meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep
        meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeep
        meep
      </TextBlock>
      <HeaderBlock>A Subheader</HeaderBlock>
      <TextBlock>A second set of text... and an IMAGE:</TextBlock>
      <ImageBlock
        credit="www.google.com"
        src={getImagePath(local, "TestImage.png")}
      >
        Image of my desktop
      </ImageBlock>
      <TextBlock>And here is the next paragraph section</TextBlock>
    </BlogPost>
  );
};
