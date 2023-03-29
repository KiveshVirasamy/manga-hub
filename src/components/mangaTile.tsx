import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ICoverData } from "../models/covers";
import { IMangaCardProp } from "../props/mangaCoverProps";
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
    <div className="card block border-2 border-yellow-500 bg-white shadow-md rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <Link
        to={`../manga/${mangaId}`}
        state={[mangaData, data?.attributes?.fileName]}
        className="w-full h-full block"
      >
        <div className="flex flex-col">
          <div
            className={`w-full h-72 bg-cover bg-center bg-no-repeat border-2 border-yellow-400 shadow-yellow-400 shadow-inner overflow-hidden ${
              coverUrl ? "" : "hidden"
            }`}
            style={{ backgroundImage: `url(${coverUrl})` }}
          ></div>
          <div className="p-4">
            <h2 className="text-yellow-500 font-bold text-lg">{title}</h2>
            <p className="mt-1 text-gray-600 truncate">{contentRating}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
