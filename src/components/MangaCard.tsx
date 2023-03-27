import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ICoverData } from "../models/covers";
import { IMangaCardProp } from "../props/mangaCoverProps";
import { getCoverById } from "../services/api";

function MangaCard(props: IMangaCardProp): JSX.Element {
  const { mangaId, coverId, title, contentRating, mangaData } = props;

  const { data } = useQuery<ICoverData>(["coverQuery", coverId], () =>
    getCoverById(coverId)
  );

  const backgroundImage = useMemo(() => {
    if (data?.attributes?.fileName) {
      return `url('https://uploads.mangadex.org/covers/${mangaId}/${data.attributes.fileName}.512.jpg')`;
    }
    return "";
  }, [data?.attributes?.fileName, mangaId]);

  if (!backgroundImage) return <></>;

  return (
    <Link
      to={`../manga/${mangaId}`}
      state={[mangaData, data?.attributes.fileName]}
    >
      <div
        className="border-2 border-yellow-400 shadow-yellow-400 shadow-inner overflow-hidden w-52 h-72 bg-no-repeat bg-cover bg-center rounded m-1 flex flex-col-reverse"
        style={{ backgroundImage }}
      >
        <div className="w-full h-2/3 text-white bg-gradient-to-t from-black flex justify-end flex-col ">
          <h2 className="font-bold px-2">{title}</h2>
          <p className="mx-2 mb-2 mt-1 rounded-full bg-yellow-400 w-fit px-2 text-[0.6rem] font-semibold uppercase">
            {contentRating}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MangaCard;
