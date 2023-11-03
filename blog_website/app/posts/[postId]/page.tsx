import { formateDate } from "@/lib/formateDate";
import { PostType, getPostData, getPosts } from "@/lib/getPosts";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { postId: string };
}) => {
  const { postId } = params;
  const posts = getPosts();
  const currPost: PostType | undefined = posts.find((p) => p.id === postId);
  if (!currPost) notFound();
  const { title } = await getPostData(postId);
  return {
    title,
    description: `Post  :${title}`,
  };
};
export const generateStaticParams = () => {
  const posts = getPosts();
  return posts.map((p) => ({ postId: p.id }));
};

export default async function Post({ params }: { params: { postId: string } }) {
  const { postId } = params;
  const posts = getPosts();
  const currPost: PostType | undefined = posts.find((p) => p.id === postId);
  if (!currPost) notFound();
  const { title, id, date, htmlContent } = await getPostData(postId);

  return (
    <div>
      <div className="flex flex-col py-5 justify-between h-full">
        <Link
          href={"/"}
          className=" w-fit h-fit p-4 border-2 rounded-md border-blue-400 font-bold text-xl text-blue-400"
        >
          Back Home
        </Link>
        <h1 className="font-bold text-3xl text-slate-700 mt-5">
          {title ?? "title"}
        </h1>
        <h1 className="font-semibold text-slate-600 text-sm mb-5">
          {formateDate(date)}
        </h1>
        <section
          className="font-semibold text-slate-900 text-xl"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
