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
      <DateBlock>July 29, 2020</DateBlock>

      <HeaderBlock>Introduction</HeaderBlock>
      <TextBlock>
        meeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep
        meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep
        meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep meeeep
        meeeep meeeep meeeep meeeep meeeep meeep meep
      </TextBlock>
      <HeaderBlock>A Subheader</HeaderBlock>
      <TextBlock>A second set of text... and an IMAGE:</TextBlock>
      <ImageBlock src={getImagePath(local, "TestImage.png")}>
        Image SRC
      </ImageBlock>
    </BlogPost>
  );
};
