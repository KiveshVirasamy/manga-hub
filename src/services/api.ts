import { IChapters } from "../models/chapterList";
import { IChapterData } from "../models/chapters";
import { ICoverData } from "../models/covers";
import { IMangaData } from "../models/manga";

export async function useMangaList(listOrder: string | undefined): Promise<IMangaData[]> {
    const apiUrl = `https://api.mangadex.org/manga?order[${listOrder}]=desc&limit=20&includes[]=cover_art&contentRating[]=safe`;
    // Fetching the manga list from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data;
}

export async function getCoverById(id: string): Promise<ICoverData> {
    const apiUrl = `https://api.mangadex.org/cover/${id}`;
    // Fetching the cover data from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data;
}

export async function getChapterFeedById(mangaId: string): Promise<IChapters[]> {
    const apiUrl = `https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&limit=500`;
    // Fetching the chapter feed from the API
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.data;
}

export async function getChapterImagesById(chapterId: string | undefined): Promise<IChapterData> {
    const apiUrl = `https://api.mangadex.org/at-home/server/${chapterId}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.chapter;
}
