import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsFolder = path.join(process.cwd(), "blogPosts");

export type PostType = {
  id: string;
  date: string;
  title: string;
};

export const getPosts = () => {
  const fileNames = fs.readdirSync(postsFolder);
  const postsData = fileNames.map((file) => {
    const id = file.replace(/\.md$/, "");
    const fullPath = path.join(postsFolder, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    const matterResults = matter(fileContent);
    return {
      id,
      date: matterResults.data.date,
      title: matterResults.data.title,
    };
  });

  return postsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPostData = async (id: string) => {
  const file = path.join(postsFolder, `${id}.md`);
  const fileContent = fs.readFileSync(file, "utf-8");
  const matterResults = matter(fileContent);

  const processedContent = await remark()
    .use(html)
    .process(matterResults.content);
  const postHTML = processedContent.toString();

  const post: PostType & { htmlContent: string } = {
    id,
    title: matterResults.data.title,
    date: matterResults.data.date,
    htmlContent: postHTML,
  };

  return post;
};
