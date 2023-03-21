import { IMangaData } from "../models/manga";

export interface IMangaCardProp {
    readonly mangaId: string;
    readonly coverId: string;
    readonly title: string;
    readonly contentRating: string;
    readonly mangaData: Readonly<IMangaData>;
    readonly className?: string;
}
export type IMangaInfoProp = {
    mangaId: string;
    coverFile: string;
    mangaData: IMangaData;
};