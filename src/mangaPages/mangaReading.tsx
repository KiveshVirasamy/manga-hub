import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import { IChapterData } from "../mangaInterfaces/chapters";
import { fetchChapterImagesById } from "../services/mangaAPI";

function ChapterImage({ chapter, hash }: IChapterData) {
  const imageUrl = `https://uploads.mangadex.org/data-saver/${hash}/${chapter}`;

  // Use the `loading` attribute to add `lazy` loading to the image.
  // This improves performance by only loading the image when it's needed.
  return (
    <div className="card p-4">
      <img
        className="w-full max-w-md h-auto mx-auto my-8"
        src={imageUrl}
        alt=""
        loading="lazy"
        aria-label="image"
      />
    </div>
  );
}

export function MangaReading() {
  const { chapterId } = useParams<{ chapterId: string }>();

  // Use the `enabled` attribute to control when the query should be sent.
  // This improves performance by not sending the query if it's not needed.
  const { data, isSuccess, isLoading } = useQuery<IChapterData, Error>(
    ["chapterImages", chapterId],
    () => fetchChapterImagesById(chapterId ?? "null"),
    {
      enabled: Boolean(chapterId),
    }
  );

  return (
    <div className="pt-16 p-4">
      <h1 className="text-center text-4xl font-bold mb-8" aria-label="heading">
        Manga Reader
      </h1>
      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <Spinner color="#10B981" />
        </div>
      )}
      {isSuccess &&
        data?.dataSaver.map((chapter) => (
          <ChapterImage
            key={chapter}
            chapter={chapter}
            hash={data.hash}
            data={[]}
            dataSaver={[]}
            result={""}
            baseUrl={""}
          />
        ))}
    </div>
  );
}
