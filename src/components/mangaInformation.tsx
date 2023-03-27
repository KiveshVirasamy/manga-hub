import { useState } from "react";
import { IMangaInfoProp } from "../props/mangaCoverProps";

const GRADIENT_CLASSES =
  "from-yellow-500 to-gray-400 via-yellow-400 bg-gradient-to-t bg-clip-text text-transparent";
const TAG_CLASSES =
  "m-1 ml-0 rounded-full bg-gray-600 w-fit px-2 text-sm font-semibold uppercase";

export function MangaInfoSheet({ mangaData, coverFile }: IMangaInfoProp) {
  const [expandDescription, setExpandDescription] = useState(false);

  const toggleDescription = () =>
    setExpandDescription((prevState) => !prevState);

  const description =
    mangaData.attributes.description.en || "No Description Found";

  const tags = mangaData.attributes.tags.filter(
    (tag) => tag.attributes.group === "genre"
  );

  return (
    <div className="bg-gray-800 rounded-xl p-6 m-6 overflow-hidden">
      <img
        className="w-auto h-auto object-cover rounded-lg mx-auto "
        src={`https://uploads.mangadex.org/covers/${mangaData.id}/${coverFile}.512.jpg`}
        alt={`${
          mangaData.attributes.title?.en ||
          mangaData.attributes.title?.["ja-ro"]
        } Cover`}
      />
      <div className="flex flex-col text-white p-6 pt-4">
        <h2 className="text-yellow-400 uppercase font-semibold italic text-lg mb-2">
          {mangaData.attributes.title?.en ||
            mangaData.attributes.title?.["ja-ro"]}
        </h2>
        <section
          onClick={toggleDescription}
          className={`min-h-[5rem] h-fit transition-all duration-500 cursor-pointer ${
            expandDescription ? "" : `${GRADIENT_CLASSES}  h-20 overflow-hidden`
          }`}
        >
          <p>{description}</p>
        </section>
        <div className="flex flex-wrap py-2 transition-all duration-500">
          {tags.map((tag) => (
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
