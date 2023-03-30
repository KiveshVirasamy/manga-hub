import axios from "axios";
import { IChapterData } from "../mangaInterfaces/chapters";
import { ICoverData } from "../mangaInterfaces/covers";
import { IMangaData } from "../mangaInterfaces/manga";

export async function fetchMangaList(listOrder: string): Promise<IMangaData[]> {
    const apiUrl = `https://api.mangadex.org/manga?order[${listOrder}]=desc&limit=20&includes[]=cover_art&contentRating[]=safe`;
    const response = await axios.get(apiUrl);
    return response.data.data;
}

export async function fetchCoverById(id: string): Promise<ICoverData> {
    const apiUrl = `https://api.mangadex.org/cover/${id}`;
    const response = await axios.get(apiUrl);
    return response.data.data;
}

export async function fetchChapterFeedById(mangaId: string): Promise<IChapterData[]> {
    const apiUrl = `https://api.mangadex.org/manga/${mangaId}/feed?translatedLanguage[]=en&limit=500`;
    const response = await axios.get(apiUrl);
    return response.data.data;
}

export async function fetchChapterImagesById(chapterId: string): Promise<IChapterData> {
    const apiUrl = `https://api.mangadex.org/at-home/server/${chapterId}`;
    const response = await axios.get(apiUrl);
    return response.data.chapter;
}

