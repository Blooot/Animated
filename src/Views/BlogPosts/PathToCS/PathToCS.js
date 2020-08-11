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
export const PathToCS = () => {
  const local = PathToCS;
  return (
    <BlogPost>
      <TitleBlock>
        My Path to Computer Science and Software Engineering
      </TitleBlock>
      <DateBlock>Aug 10th 2020</DateBlock>

      <HeaderBlock>Intro</HeaderBlock>
      <TextBlock>
        This topic has been explored by many. Everyone's path to a new career is
        different, and I think there are many great ways to break into this
        field. A colleague and inspiration of mine has{" "}
        <a href="https://jasonbenn.com/post/how-i-learned-to-code">
          written and thought extensively
        </a>{" "}
        about self-learning, and I asked his advice while I was deciding whether
        I should commit to a career change (it's a lot of work!).
      </TextBlock>
      <TextBlock>
        When defining your learning path, it's important to think deeply about
        your current situation and the constraints you aim to satisfy during
        your journey.
      </TextBlock>
      <TextBlock>
        For example:
        <ul>
          <li>
            What is your goal? Employbility, building tools for yourself, or
            something else?
          </li>
          <li>Are you on a timeline?</li>
          <li>Are you constrained by budget?</li>
          <li>Are formal credentials important to you?</li>
        </ul>
      </TextBlock>
      <TextBlock>
        The list of considerations can be long, and it's okay if you don't have
        answers for all of them. Software engineering is a very broad field, and
        starting to establish your bearings early is going to help aim you in
        the right direction.
      </TextBlock>
      <TextBlock>
        Some of the early decisions that I made were the following:
        <ul>
          <li>I will learn about Computer Science.</li>
          <li>I will retain my current job.</li>
          <li>
            I am more interested in knowledge and understanding than
            accreditation.
          </li>
          <li>I want a mix of experiential and textbook learning.</li>
          <li>I want to build useful things for myself and others.</li>
        </ul>
      </TextBlock>
      <TextBlock>
        My list of constraints helped me realize that I'm probably not a fit for
        a full-time bootcamp or going back to university, that I could take my
        time to learn the fundamentals of computer science (and would need to
        find good resources to do so on my own), and that building projects that
        I found useful along the way would keep me motivated.
      </TextBlock>
      <TextBlock>
        Lastly, my path to becoming a developer was not entirely alone. I am
        lucky to have a great mentor and friend from my time working at
        Sourceress. I would highly recommend finding a mentor or a community
        (perhaps even an open-source project) that can help in your journey.
      </TextBlock>
      <HeaderBlock>Resources</HeaderBlock>
      <TextBlock>Stuff~</TextBlock>
    </BlogPost>
  );
};
