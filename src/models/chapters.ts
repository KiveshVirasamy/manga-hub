export interface IChapter {
    hash: string;
    data: string[];
    dataSaver: string[];
}

export interface IChapterObject {
    result: string;
    baseUrl: string;
    chapter: IChapter;
}
