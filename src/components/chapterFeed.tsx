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
          <div className="border border-gray-400 rounded p-4 cursor-pointer transition-all duration-300 hover:bg-gray-700">
            <p className="text-white font-bold">
              Chapter {data.attributes.chapter}
            </p>
            <p className="text-gray-300">Pages: {data.attributes.pages}</p>
          </div>
        </Link>
      );
    });
  }, [sortedChapterList]);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h1 className="text-white font-bold text-lg mb-4">Available Chapters</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {queryResult.isError && (
          <p className="text-red-500">Error loading chapter list.</p>
        )}
        {queryResult.isLoading && <p>Loading chapters...</p>}
        {queryResult.isSuccess && chapterList}
      </div>
    </div>
  );
}
