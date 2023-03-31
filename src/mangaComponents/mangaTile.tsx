import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ICoverData } from "../mangaInterfaces/covers";
import { IMangaCardProp } from "../mangaProps/mangaCoverProps";
import { fetchCoverById } from "../services/mangaAPI";

export function MangaTile(props: IMangaCardProp): JSX.Element {
  const { mangaId, coverId, title, contentRating, mangaData } = props;

  const { data } = useQuery<ICoverData>(
    ["coverQuery", coverId],
    () => fetchCoverById(coverId),
    { staleTime: 5 }
  );

  const coverUrl = useMemo(() => {
    if (data?.attributes?.fileName) {
      return `https://uploads.mangadex.org/covers/${mangaId}/${data.attributes.fileName}.512.jpg`;
    }
    return "";
  }, [data?.attributes?.fileName, mangaId]);

  return (
    <div className="card block bg-white shadow-inner rounded-lg overflow-hidden">
      <Link
        to={`../manga/${mangaId}`}
        state={[mangaData, data?.attributes?.fileName]}
        className="w-full h-full block"
        aria-label={`Link to manga details page for ${title}`}
      >
        <div className="flex flex-col">
          <div
            className={`w-full h-72 bg-cover bg-center bg-no-repeat shadow-inner overflow-hidden hover:shadow-md transition duration-110 ease-in-out${
              coverUrl ? "" : "hidden"
            }`}
            style={{ backgroundImage: `url(${coverUrl})` }}
            aria-label={`Cover image for ${title}`}
          ></div>
          <div className="p-4">
            <h2 className="text-yellow-500 font-bold text-lg">{title}</h2>
            <p
              className="mt-1 text-gray-600 truncate"
              aria-label="Content rating"
            >
              {contentRating}
            </p>
          </div>
        </div>
      </Link>
      <div className="bg-white "></div>
    </div>
  );
}
