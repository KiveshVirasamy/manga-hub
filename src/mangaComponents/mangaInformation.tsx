import { useState } from "react";
import { IMangaInfoProp } from "../mangaProps/mangaCoverProps";

const TRUNCATE_LENGTH = 200;

export function MangaInfoSheet({ mangaData, coverFile }: IMangaInfoProp) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => setShowFullDescription(!showFullDescription);

  const description =
    mangaData.attributes.description.en || "No Description Found";

  const tags = mangaData.attributes.tags.filter(
    (tag) => tag.attributes.group === "genre"
  );

  const truncatedDescription = description.substring(0, TRUNCATE_LENGTH);
  const isDescriptionTruncated =
    description.length > truncatedDescription.length;

  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden mx-6 my-8">
      <div className="card-content flex flex-col">
        <div
          className="w-full h-64 bg-gray-300 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://uploads.mangadex.org/covers/${mangaData.id}/${coverFile}.512.jpg)`,
          }}
        ></div>
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold mb-2">
            {mangaData.attributes.title?.en ||
              mangaData.attributes.title?.["ja-ro"]}
          </h2>
          <p className="text-gray-600">
            {isDescriptionTruncated ? (
              <>
                {showFullDescription ? description : truncatedDescription}{" "}
                <button
                  className="text-blue-500 font-semibold"
                  onClick={toggleDescription}
                >
                  {showFullDescription ? "Read Less" : "Read More"}
                </button>
              </>
            ) : (
              description
            )}
          </p>
          <div className="flex flex-wrap mt-4">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="badge bg-gray-200 text-gray-700 mr-2 mb-2 px-2 py-1 text-sm font-semibold rounded-full"
              >
                {tag.attributes.name.en}
              </span>
            ))}
          </div>
          <p className="mt-4">
            <span className="font-semibold">Release Year:</span>{" "}
            {mangaData.attributes.year}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            {mangaData.attributes.status}
          </p>
          <p>
            <span className="font-semibold">State:</span>{" "}
            {mangaData.attributes.state}
          </p>
        </div>
      </div>
    </div>
  );
}
