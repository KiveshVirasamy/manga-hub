import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MangaCard from "../components/MangaCard";
import SearchManga from "../components/searchManga";
import { IMangaData } from "../models/manga";
import { useMangaList } from "../services/api";

export function MangaCardContainer() {
  const { orderType } = useParams<{ orderType: string }>();

  const mangaQuery = useQuery<IMangaData[], Error>(
    [`mangaQuery`, orderType],
    () => useMangaList(orderType)
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
    <div>
      <SearchManga value={searchQuery} onChange={handleSearchInputChange} />
      {mangaListIsLoading && <div>Manga is loading...</div>}
      {mangaListIsSuccess && (
        <div className="flex flex-wrap justify-center gap-2">
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
                <MangaCard
                  key={mangaId}
                  mangaData={mangaData}
                  mangaId={mangaId}
                  coverId={coverId}
                  title={title}
                  contentRating={contentRating}
                />
              );
            })
          ) : (
            <div>{mangaListIsError}</div>
          )}
        </div>
      )}
    </div>
  );
}
