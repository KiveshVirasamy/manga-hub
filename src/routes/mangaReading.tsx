import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IChapter } from "../models/chapters";
import { getChapterImagesById } from "../services/api";

interface ChapterImageProps {
  chapter: string;
  hash: string;
}

function ChapterImage({ chapter, hash }: ChapterImageProps) {
  const imageUrl = `https://uploads.mangadex.org/data-saver/${hash}/${chapter}`;

  // Use the `loading` attribute to add `lazy` loading to the image.
  // This improves performance by only loading the image when it's needed.
  return <img className="py-1" src={imageUrl} alt="" loading="lazy" />;
}

export function MangaReader() {
  const { chapterId } = useParams<{ chapterId: string }>();

  // Use the `enabled` attribute to control when the query should be sent.
  // This improves performance by not sending the query if it's not needed.
  const { data, isLoading, isSuccess } = useQuery<IChapter, Error>(
    ["chapterImages", chapterId],
    () => getChapterImagesById(chapterId),
    {
      enabled: Boolean(chapterId),
    }
  );

  return (
    <div className="pt-16 p-4 flex flex-col items-center">
      {isSuccess &&
        data?.dataSaver.map((chapter) => (
          <ChapterImage key={chapter} chapter={chapter} hash={data.hash} />
        ))}
    </div>
  );
}
