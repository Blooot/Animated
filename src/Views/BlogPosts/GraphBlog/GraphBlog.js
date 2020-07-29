import React from "react";
import {
  DateBlock,
  HeaderBlock,
  ImageBlock,
  TextBlock,
  TitleBlock,
} from "../../../components/Blocks/index";
import { BlogPost } from "../../../components/BlogPost";
import test2 from "./assets/test2.png";
import TestImage from "./assets/TestImage.png";

export const GraphBlog = () => {
  return (
    <BlogPost>
      <TitleBlock>Graph Problems and State Machines</TitleBlock>
      <DateBlock>July 29, 2020</DateBlock>

      <HeaderBlock>Introduction</HeaderBlock>
      <TextBlock>
        This is some text -- the blog post itself. I am going to write a long
        ass sentence to see if this wraps. And if it does. that's cool.
      </TextBlock>
      <ImageBlock src={TestImage}>A rad Image</ImageBlock>
      <HeaderBlock>A title:</HeaderBlock>
      <TextBlock>A second set of text... and ANOTHER IMAGE:</TextBlock>
      <ImageBlock src={test2}>A rad Image</ImageBlock>
    </BlogPost>
  );
};
