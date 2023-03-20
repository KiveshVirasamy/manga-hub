import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MangaCard } from "../components/MangaCard";
import { IMangaData } from "../models/manga";
import { getManga } from "../services/api";

// Define the props that this component will receive
interface MangaCardContainerProps {}

export function MangaCardContainer(props: MangaCardContainerProps) {
  // Get the orderType parameter from the URL using the useParams hook
  const { orderType } = useParams<{ orderType: string }>();

  // Fetch the manga data using useQuery hook
  const mangaQuery = useQuery<IMangaData[], Error>(
    [`mangaQuery`, orderType],
    () => getManga(orderType)
  );

  // Refetch the manga data when the orderType parameter changes
  useEffect(() => {
    mangaQuery.refetch();
  }, [orderType]);

  // Extract the relevant data from the mangaQuery object
  const mangaListArray = mangaQuery.data ?? [];
  const mangaListIsLoading = mangaQuery.isLoading;
  const mangaListIsSuccess = mangaQuery.isSuccess;
  const mangaListIsError = mangaQuery.isError;

  return (
    <div>
      {mangaListIsLoading && <div>manga is loading</div>}
      {mangaListIsSuccess && (
        <div className="flex flex-wrap justify-center gap-2">
          {mangaListArray.length > 0 ? (
            mangaListArray.map((mangaData: IMangaData) => {
              // Extract the necessary data from the mangaData object
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

              // Render the MangaCard component with the extracted data
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
            <h1>No manga found</h1>
          )}
        </div>
      )}
    </div>
  );
}
