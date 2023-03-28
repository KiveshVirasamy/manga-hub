import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link } from "react-router-dom";

import { IChapterData, IChapters } from "../models/chapterList";
import { IMangaInfoProp } from "../props/mangaCoverProps";
import ErrorPage from "../routes/errorPage";
import { fetchChapterFeedById } from "../services/api";

type ChapterListQueryResult = UseQueryResult<IChapters[], Error>;

export function ChapterList({ mangaId }: IMangaInfoProp): JSX.Element {
  const { data, isError, isLoading, isSuccess }: ChapterListQueryResult =
    useQuery(
      ["chapterListQuery", mangaId],
      () => fetchChapterFeedById(mangaId),
      {
        staleTime: 5,
      }
    );

  const sortedChapterList = useMemo(() => {
    if (!data) {
      return null;
    }
    const chapters: IChapterData[] = data.map(({ id, attributes }) => ({
      id,
      chapter: Number(attributes.chapter.replaceAll(".", "")) || 0,
      pages: attributes.pages,
    }));
    return chapters.sort((a, b) => a.chapter - b.chapter);
  }, [data]);

  const chapterList = useMemo(() => {
    if (!sortedChapterList) {
      return null;
    }
    return sortedChapterList.map((chapter) => (
      <Link key={chapter.id} to={`../manga/chapter/${chapter.id}`}>
        <div className="border border-gray-400 rounded p-4 cursor-pointer transition-all duration-300 hover:bg-gray-700">
          <p className="text-white font-bold">Chapter {chapter.chapter}</p>
          <p className="text-gray-300">Pages: {chapter.pages}</p>
        </div>
      </Link>
    ));
  }, [sortedChapterList]);

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h1 className="text-white font-bold text-lg mb-4">Available Chapters</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {isError && (
          <p className="text-red-500">
            <ErrorPage />
          </p>
        )}
        {isLoading && <p>Loading chapters...</p>}
        {isSuccess && chapterList}
      </div>
    </div>
  );
}
