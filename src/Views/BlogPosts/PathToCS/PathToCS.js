import React from "react";
import {
  DateBlock,
  HeaderBlock,
  TextBlock,
  TitleBlock,
} from "../../../components/Blocks/index";
import { BlogPost } from "../../../components/BlogPost";
export const PathToCS = () => {
  return (
    <BlogPost>
      <TitleBlock>
        My Path to Computer Science and Software Engineering
      </TitleBlock>
      <DateBlock>Aug 10th 2020</DateBlock>

      <HeaderBlock>Intro:</HeaderBlock>
      <TextBlock>
        This topic has been explored by many, but I'd like for this post to
        accomplish two things. First, I want to share my thought process for
        choosing what to study. Second, I want to curate materials that I think
        are useful.
      </TextBlock>
      <TextBlock>
        A colleague and inspiration of mine has{" "}
        <a href="https://jasonbenn.com/post/how-i-learned-to-code">
          written and thought extensively
        </a>{" "}
        about self-learning, and I'm grateful that I had his support while
        entering this field. Thanks, Jason!
      </TextBlock>
      <HeaderBlock>Planning:</HeaderBlock>

      <TextBlock>
        When defining your learning path, it's important to think deeply about
        your current situation and the constraints you aim to satisfy during
        your studies.
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
      <TextBlock>
        <em>TeachYourselfCS.com</em>
        <ul>
          <li>
            First and foremost, <a href="https://teachyourselfcs.com/">this</a>{" "}
            has been a guidepost for me. I intend to finish reading all of the
            resources listed there.
          </li>
        </ul>
      </TextBlock>
      <TextBlock>
        <em>Courses and lectures:</em>
        <ul>
          <li>
            Bradfield's Practical problem solving with Algorithms and Data
            Structures{" "}
            <a href="https://bradfieldcs.com/courses/algorithms/">Link</a>.
          </li>
          <li>
            Bradfield's Computer Architecture and the Hardware/Software
            Interface{" "}
            <a href="https://bradfieldcs.com/courses/architecture/">Link</a>.
          </li>
          <li>
            Offered by Stanford, Tim Roughgarden's class on Algorithms and Data
            Structures. Available{" "}
            <a href="https://www.coursera.org/specializations/algorithms">
              here
            </a>{" "}
            and{" "}
            <a href="https://online.stanford.edu/courses/soe-ycsalgorithms1-algorithms-design-and-analysis-part-1">
              here
            </a>
            .
          </li>
          <li>
            An introduction to relational databases{" "}
            <a href="https://www.udacity.com/course/intro-to-relational-databases--ud197">
              Link
            </a>
            .
          </li>
          <li>
            Educative's Grokking the System Design Interview{" "}
            <a href="https://www.educative.io/courses/grokking-the-system-design-interview">
              Link
            </a>
            .
          </li>
          <li>
            TeachYourselfCS recommends SICP (Structure and Interpretation of
            Computer Programs) for learning how to program.{" "}
            <a href="https://mitpress.mit.edu/sites/default/files/sicp/index.html">
              Here
            </a>{" "}
            is the original, and{" "}
            <a href="https://wizardforcel.gitbooks.io/sicp-in-python/content/">
              here
            </a>{" "}
            is a Berkeley adapted Python version. Both are great.
          </li>
        </ul>
      </TextBlock>
      <TextBlock>
        <em>Books:</em>
        <ul>
          <li>
            The Algorithm Design Manual{" "}
            <a href="http://www.algorist.com/">Link</a>.
          </li>
          <li>
            Designing Data-Intensive Applications{" "}
            <a href="https://github.com/Yang-Yanxiang/Designing-Data-Intensive-Applications">
              Link
            </a>
            .
          </li>
          <li>
            Code Complete{" "}
            <a href="https://github.com/xianshenglu/document/blob/master/Code%20Complete%202nd%20Edition.pdf">
              Link
            </a>
            .
          </li>
          <li>
            Bradfield's book on algorithms{" "}
            <a href="https://bradfieldcs.com/algos/">Link</a>.
          </li>
          <li>
            You don't know JS{" "}
            <a href="https://github.com/getify/You-Dont-Know-JS">Link</a>.
          </li>
          <li>
            Think Python{" "}
            <a href="https://greenteapress.com/wp/think-python-2e/">Link</a>.
          </li>
          <li>
            The Art of Multiprocessor Programming{" "}
            <a href="https://github.com/amilajack/reading/blob/master/Computer_Science/The%20Art%20of%20Multiprocessor%20Programming.pdf">
              Link
            </a>
            .
          </li>
        </ul>
      </TextBlock>
      <TextBlock>
        <em>Short-form information:</em>
        <ul>
          <li>
            Red Blob Games -- a great site for animated algorithms and detailed
            explanations <a href="https://www.redblobgames.com/">Link</a>.
          </li>
          <li>
            3Blue1Brown -- Animated Math concepts{" "}
            <a href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw">
              Link
            </a>
            .
          </li>
          <li>
            TypeScript and React information{" "}
            <a href="https://fettblog.eu/typescript-react/">Link</a>.
          </li>
          <li>
            The official React documentation is incredible{" "}
            <a href="https://reactjs.org/docs/getting-started.html">Link</a>.
          </li>
          <li>
            So is the official Django tutorial{" "}
            <a href="https://docs.djangoproject.com/en/3.1/intro/tutorial01/">
              Link
            </a>
            .
          </li>
          <li>
            A great post on React's Reconciliation algorithm{" "}
            <a href="https://blog.ag-grid.com/inside-fiber-an-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/">
              Link
            </a>
            .
          </li>
          <li>
            Short video lecture on TypeScript/Node/GraphQL{" "}
            <a href="https://www.newline.co/courses/the-newline-guide-to-building-your-first-graphql-server-with-node-and-typescript/welcome">
              Link
            </a>
            .
          </li>
        </ul>
      </TextBlock>
      <TextBlock>
        <em>Practice:</em>
        <br />
        <br />
        First, build anything you want! While learning Python, I built an
        arbitrage calculator and market web scraper for an online video game to
        help my friends play the market. See my other projects{" "}
        <a href="https://github.com/Blooot">here</a>. Also, I love studying
        algorithms and practicing at the following sites.
        <ul>
          <li>
            <a href="https://leetcode.com/">Leetcode</a>
          </li>
          <li>
            <a href="https://atcoder.jp/">AtCoder</a>
          </li>
        </ul>
      </TextBlock>
      <TextBlock>
        This list is incomplete and will be regularly updated :)
      </TextBlock>
    </BlogPost>
  );
};
