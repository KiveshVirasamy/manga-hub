// Importing necessary interfaces
import { IChapterData } from "../models/chapterList";
import { IChapter } from "../models/chapters";
import { ICoverData } from "../models/covers";
import { IMangaData } from "../models/manga";

// Function to get list of manga
export function getManga(listOrder: string | undefined): Promise<IMangaData[]> {
    const apiUrl = "https://api.mangadex.org/manga?order[${listOrder}]=desc&limit=20&includes[]=cover_art&contentRating[]=safe";
    // Fetching the manga list from the API
    const response = fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((error) => {
            console.log(error);
        });
    return response;
}

// Function to get cover data by id
export function getCoverById(id: string): Promise<ICoverData> {
    const apiUrl = "https://api.mangadex.org/cover/${id}";
    // Fetching the cover data from the API
    const response: Promise<ICoverData> = fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((error) => {
            console.log(error);
        });
    return response;
}

// Function to get the chapter feed by manga id
export function getChapterFeedById(mangaId: string): Promise<IChapterData[]> {
    const apiUrl = "https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&limit=500";
    // Fetching the chapter feed from the API
    const response = fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => res.data);

    return response;
}

// Function to get the chapter images by chapter id
export function getChapterImagesById(
    chapterId: string | undefined
): Promise<IChapter> {
    const apiUrl = "https://api.mangadex.org/at-home/server/${chapterId}";
    // Fetching the chapter images from the API
    const response = fetch(apiUrl)
        .then((res) => res.json())
        .then((res) => res.chapter);

    return response;
}