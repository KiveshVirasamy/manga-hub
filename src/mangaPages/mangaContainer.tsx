import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-spinners-css/lib/esm/Spinner";
import { FilterManga } from "../mangaComponents/filterManga";
import { MangaTile } from "../mangaComponents/mangaTile";
import { IMangaData } from "../mangaInterfaces/manga";
import { fetchMangaList } from "../services/mangaAPI";

export function MangaContainer() {
  const { orderType } = useParams<{ orderType: string }>();

  const mangaQuery = useQuery<IMangaData[], Error>(
    [`mangaQuery`, orderType],
    () => fetchMangaList(orderType ?? "null")
  );

  useEffect(() => {
    mangaQuery.refetch();
  }, [orderType]);

  const mangaListArray = mangaQuery.data ?? [];
  const mangaListIsLoading = mangaQuery.isLoading;
  const mangaListIsSuccess = mangaQuery.isSuccess;
  const mangaListIsError = mangaQuery.isError;

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const filteredMangaList = mangaListArray.filter((mangaData: IMangaData) =>
    mangaData?.attributes?.title?.en
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="bg-blue-900 text-white p-10"
      aria-label="Manga list container"
    >
      <FilterManga
        value={searchQuery}
        onChange={handleSearchInputChange}
        aria-label="Search manga by title"
      />
      {mangaListIsLoading && (
        <Spinner color="#10B981" aria-label="Loading spinner" />
      )}
      {mangaListIsSuccess && (
        <div
          className="flex flex-wrap justify-center gap-4"
          aria-label="Manga list"
        >
          {filteredMangaList.length > 0 ? (
            filteredMangaList.map((mangaData: IMangaData) => {
              const mangaId = mangaData.id;
              const coverId =
                mangaData.relationships.find(
                  ({ type }: { type: string }) => type === "cover_art"
                )?.id ?? "";
              const title =
                mangaData?.attributes?.title?.en ??
                mangaData?.attributes?.title?.["ja-ro"] ??
                "";
              const contentRating = mangaData?.attributes?.contentRating ?? "";

              return (
                <div
                  key={mangaId}
                  className="card max-w-sm w-full"
                  aria-label={`Manga ${title}`}
                >
                  <MangaTile
                    mangaData={mangaData}
                    mangaId={mangaId}
                    coverId={coverId}
                    title={title}
                    contentRating={contentRating}
                  />
                </div>
              );
            })
          ) : (
            <div className="text-white" aria-label="Manga list error">
              {mangaListIsError}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
