import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { ICoverData } from "../models/covers";
import { IMangaCardProp } from "../props/mangaCoverProps";
import { getCoverById } from "../services/api";

/**
 * Represents a manga card component.
 * @param props The manga card component props.
 * @returns The manga card component.
 */
export function MangaCard(props: IMangaCardProp): JSX.Element {
  const { mangaId, coverId, title, contentRating, mangaData } = props;

  const queryKey = ["coverQuery", coverId];

  // Use React Query hook to fetch cover data from the API.
  // The hook provides the data, isLoading, and isSuccess states.
  // It also automatically handles caching, refetching, and error handling.
  const { data, isLoading, isSuccess }: UseQueryResult<ICoverData, Error> =
    useQuery(queryKey, () => getCoverById(coverId));

  // If cover data is not available, return an empty fragment.
  if (!data?.attributes?.fileName) return <></>;

  // Otherwise, return the manga card component.
  return (
    <Link
      to={`../manga/${mangaId}`}
      state={[mangaData, data?.attributes.fileName]}
    >
      <div
        className="border-2 border-amber-500 shadow-amber-500 shadow-inner overflow-hidden w-52 h-72 bg-no-repeat bg-cover bg-center rounded m-1 flex flex-col-reverse"
        style={{
          backgroundImage: `url('https://uploads.mangadex.org/covers/${mangaId}/${data.attributes.fileName}.512.jpg')`,
        }}
      >
        <div className="w-full h-2/3 text-white bg-gradient-to-t from-black flex justify-end flex-col ">
          <h2 className="font-bold px-2"> {title}</h2>
          <p className="mx-2 mb-2 mt-1 rounded-full bg-stone-600 w-fit px-2 text-[0.6rem] font-semibold uppercase">
            {contentRating}
          </p>
        </div>
      </div>
    </Link>
  );
}
