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
      <DateBlock>TBD</DateBlock>

      <HeaderBlock>Introduction</HeaderBlock>
      <TextBlock>Coming soon...</TextBlock>
    </BlogPost>
  );
};
