import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { IChapters } from "../models/chapterList";
import { IMangaInfoProp } from "../props/mangaCoverProps";
import { getChapterFeedById } from "../services/api";

export function ChapterList({ mangaId }: IMangaInfoProp): JSX.Element {
  const queryResult: UseQueryResult<IChapters[], Error> = useQuery(
    ["chapterListQuery", mangaId],
    () => getChapterFeedById(mangaId)
  );

  const sortedChapterList = useMemo(() => {
    return queryResult.data?.sort((a: IChapters, b: IChapters): number => {
      const chapterA: number = Number(a.attributes.chapter.replaceAll(".", ""));
      const chapterB: number = Number(b.attributes.chapter.replaceAll(".", ""));
      const chapterNumA: number = Number.isNaN(chapterA) ? 0 : chapterA;
      const chapterNumB: number = Number.isNaN(chapterB) ? 0 : chapterB;
      return chapterNumA - chapterNumB;
    });
  }, [queryResult.data]);

  const chapterList = useMemo(() => {
    return sortedChapterList?.map((data: IChapters): JSX.Element => {
      return (
        <Link key={data.id} to={`../manga/chapter/${data.id}`}>
          <p className="cursor-pointer text-yellow-300">
            Chapter: {data.attributes.chapter} Pages: {data.attributes.pages}
          </p>
        </Link>
      );
    });
  }, [sortedChapterList]);

  return (
    <div className="bg-black">
      <h1>Available Chapters</h1>
      {queryResult.isSuccess && chapterList}
    </div>
  );
}
