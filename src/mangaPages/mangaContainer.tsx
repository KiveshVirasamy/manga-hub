import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MangaTile } from "../mangaComponents/mangaTile";
import { MangaSearch } from "../mangaComponents/searchManga";
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

  const [cardClass] = useState(
    "block border-2 border-yellow-500 bg-white shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 p-4"
  );

  const filteredMangaList = mangaListArray.filter((mangaData: IMangaData) =>
    mangaData?.attributes?.title?.en
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 text-white p-10">
      <MangaSearch value={searchQuery} onChange={handleSearchInputChange} />
      {mangaListIsLoading && (
        <div className="text-white">Manga is loading...</div>
      )}
      {mangaListIsSuccess && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                <MangaTile
                  key={mangaId}
                  mangaData={mangaData}
                  mangaId={mangaId}
                  coverId={coverId}
                  title={title}
                  contentRating={contentRating}
                  className={cardClass}
                />
              );
            })
          ) : (
            <div className="text-white">{mangaListIsError}</div>
          )}
        </div>
      )}
    </div>
  );
}
