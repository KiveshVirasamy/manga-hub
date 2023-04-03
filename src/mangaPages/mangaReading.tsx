import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-spinners-css";
import { IChapterInfo } from "../mangaInterfaces/chapters";
import { fetchChapterImagesById } from "../services/mangaAPI";

function ChapterImage({ chapter, hash }: IChapterInfo) {
  const imageUrl = `https://uploads.mangadex.org/data-saver/${hash}/${chapter}`;

  return (
    <div className="card p-4">
      <img
        className="w-full max-w-md h-auto mx-auto my-8"
        src={imageUrl}
        alt=""
        loading="lazy"
        aria-label="Chapter Image"
      />
    </div>
  );
}

export function MangaReading() {
  const { chapterId } = useParams<{ chapterId: string }>();
  const navigate = useNavigate();

  const { data, isSuccess, isLoading } = useQuery<IChapterInfo, Error>(
    ["chapterImages", chapterId],
    () => fetchChapterImagesById(chapterId ?? "null"),
    {
      enabled: Boolean(chapterId),
    }
  );

  return (
    <div className="pt-16 p-4">
      <div>
        <button onClick={() => navigate(-1)} aria-label="Go Back Button">
          Back
        </button>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-screen">
          <Spinner color="#10B981" aria-label="Loading Spinner" />
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
      <div>
        <button onClick={() => navigate(-1)} aria-label="Go Back Button">
          Back
        </button>
      </div>
    </div>
  );
}
