import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { IChapterData } from "../models/chapterList";
import { IMangaInfoProp } from "../props/mangaCoverProps";
import { getChapterFeedById } from "../services/api";

export function ChapterFeed({ mangaId }: IMangaInfoProp): JSX.Element {
  const queryResult: UseQueryResult<IChapterData[], Error> = useQuery(
    [`chapterFeedQuery`, mangaId],
    () => getChapterFeedById(mangaId)
  );

  const chapterList = queryResult.data
    ?.sort((a: IChapterData, b: IChapterData): number => {
      const chapterA: number = Number(a.attributes.chapter.replaceAll(".", ""));
      const chapterB: number = Number(b.attributes.chapter.replaceAll(".", ""));
      const chapterNumA: number = Number.isNaN(chapterA) ? 0 : chapterA;
      const chapterNumB: number = Number.isNaN(chapterB) ? 0 : chapterB;
      return chapterNumA - chapterNumB;
    })
    .map((data: IChapterData): JSX.Element => {
      return (
        <Link key={data.id} to={`../manga/chapter/${data.id}`}>
          <p className="cursor-pointer text-yellow-300 hover:bg-black">
            Chapter: {data.attributes.chapter} Pages: {data.attributes.pages}
          </p>
        </Link>
      );
    });

  return (
    <div className="bg-black rounded-3xl flex flex-col p-6 m-6 overflow-hidden">
      <h1 className="text-yellow-400 pb-4">Available Chapters</h1>
      {queryResult.isSuccess && chapterList}
    </div>
  );
}
