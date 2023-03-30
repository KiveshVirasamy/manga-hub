import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { lazy, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
import Spinner from "react-spinners-css/lib/esm/Spinner";

import { IChapterData, IChapters } from "../mangaInterfaces/chapterList";
import { IMangaInfoProp } from "../mangaProps/mangaCoverProps";
import { fetchChapterFeedById } from "../services/mangaAPI";
const ErrorPage = lazy(() => import("../mangaPages/errorPage"));

type ChapterListQueryResult = UseQueryResult<IChapters[], Error>;

export function MangaChapterList({ mangaId }: IMangaInfoProp): JSX.Element {
  const queryResult: ChapterListQueryResult = useQuery(
    ["chapterListQuery", mangaId],
    () => fetchChapterFeedById(mangaId),
    {
      staleTime: 5,
    }
  );

  const sortedChapterList = useMemo(() => {
    if (!queryResult.data) {
      return null;
    }
    const chapters: IChapterData[] = queryResult.data.map(
      ({ id, attributes }) => ({
        id,
        chapter: Number(attributes.chapter.replaceAll(".", "")) || 0,
        pages: attributes.pages,
      })
    );
    return chapters.sort((a, b) => a.chapter - b.chapter);
  }, [queryResult.data]);

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
        <Suspense fallback={<div>Loading...</div>}>
          {queryResult.status === "error" && (
            <p className="text-red-500">
              <ErrorPage />
            </p>
          )}
        </Suspense>
        {queryResult.status === "loading" && <Spinner color="#10B981" />}
        {queryResult.status === "success" && chapterList}
      </div>
    </div>
  );
}
