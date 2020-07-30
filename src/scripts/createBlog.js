const yargs = require("yargs");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const moment = require("moment");
const prependFile = require("prepend-file");

const argv = yargs
  .option("blog", {
    alias: "b",
    describe: "Specify the name of the Blog",
  })
  .option("desc", {
    alias: "d",
    describe: "specify the description of the blog post",
  })
  .option("title", {
    alias: "t",
    describe: "Enter the title of the post that will appear on the site",
  })
  .help("help").argv;

console.log(`Creating blog template for ${chalk.green.bold(argv.blog)}`);

const sliceAndAppendToFile = (path, addition, sliceDistance) => {
  let oldData = fs.readFileSync(path).toString();
  let dataOut = oldData.slice(0, sliceDistance).concat(addition);
  fs.writeFileSync(path, dataOut);
};

const blogPath = path.resolve(
  path.join("src", "Views", "BlogPosts", argv.blog)
);

fs.mkdirSync(blogPath);
const fileDest = path.resolve(
  path.join("src", "Views", "BlogPosts", argv.blog, `${argv.blog}.js`)
);

let date = moment().format("MMM Do YYYY");

let data = `import React from "react";\nimport {DateBlock,HeaderBlock,ImageBlock,TextBlock,TitleBlock,} from "../../../components/Blocks/index"\nimport { BlogPost } from "../../../components/BlogPost"\n\nexport const ${argv.blog} = () => {\nreturn (\n<BlogPost>\n<TitleBlock>Temp</TitleBlock>\n<DateBlock>${date}</DateBlock>\n</BlogPost>)}`;

// Create new object in demos
const demosPath = path.resolve(path.join("src", "Demos", "Demos.js"));
const newDemo = `{title: "${argv.title}",body: "${argv.desc}", href: "${argv.blog}",\n},\n];`;
sliceAndAppendToFile(demosPath, newDemo, -3);
// Create new route
const routesPath = path.resolve(path.join("src", "routes.js"));
const newImport = `\nimport {${argv.blog}} from "./Views/BlogPosts/${argv.blog}/${argv.blog}";\n`;
prependFile(routesPath, newImport);
const newRoute = `{path: "/${argv.blog}", exact: true, component: ${argv.blog},\n},\n],\n},\n];`;
sliceAndAppendToFile(routesPath, newRoute, -11);

fs.writeFileSync(fileDest, data);
console.log(`${chalk.red.bold("...")}`);
console.log(`Finished creating ${chalk.green.bold(argv.blog)}`);
