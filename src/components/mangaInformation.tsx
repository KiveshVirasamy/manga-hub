import React, { useState } from "react";
import { IMangaInfoProp } from "../props/mangaCoverProps";

const GRADIENT_CLASSES =
  "from-yellow-400 to-yellow-200 via-yellow-200 bg-gradient-to-t bg-clip-text text-transparent";
const TAG_CLASSES =
  "m-1 ml-0 rounded-full bg-yellow-600 w-fit px-2 text-[0.6rem] font-semibold uppercase";

export function MangaInfoSheet({ mangaData, coverFile }: IMangaInfoProp) {
  const [expandDescription, setExpandDescription] = useState(false);

  const toggleDescription = () => setExpandDescription(!expandDescription);

  return (
    <div className="bg-black rounded-3xl flex flex-col m-6 overflow-hidden">
      <img
        className="overflow-hidden w-full h-fit flex flex-col-reverse"
        src={`https://uploads.mangadex.org/covers/${mangaData.id}/${coverFile}.512.jpg`}
        alt={`${
          mangaData.attributes.title?.en ||
          mangaData.attributes.title?.["ja-ro"]
        } Cover`}
      />

      <div className="flex flex-col text-yellow-300 p-6 pt-4 w-full">
        <h2 className="w-full text-yellow-400 uppercase font-semibold italic text-lg mb-2">
          {mangaData?.attributes?.title?.en ||
            mangaData?.attributes?.title?.["ja-ro"]}
        </h2>
        <section
          onClick={toggleDescription}
          className={`w-full min-h-[5rem] h-fit transition-all duration-500 cursor-pointer ${
            expandDescription ? "" : `${GRADIENT_CLASSES} h-20 overflow-hidden`
          }`}
        >
          <p>{mangaData.attributes.description.en || "No Description Found"}</p>
        </section>
        <div className="flex flex-wrap py-2 transition-all duration-500">
          {mangaData.attributes.tags
            .filter((tag) => tag.attributes.group === "genre")
            .map((tag) => (
              <p key={tag.id} className={TAG_CLASSES}>
                {tag.attributes.name.en}
              </p>
            ))}
        </div>
        <p>
          Release Year:{" "}
          <span className={TAG_CLASSES}>{mangaData.attributes.year}</span>
        </p>
        <p>
          Status:{" "}
          <span className={TAG_CLASSES}>{mangaData.attributes.status}</span>
        </p>
        <p>
          State:{" "}
          <span className={TAG_CLASSES}>{mangaData.attributes.state}</span>
        </p>
      </div>
    </div>
  );
}
