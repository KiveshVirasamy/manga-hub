export interface IChapterData {
    hash: string;
    data: string[];
    dataSaver: string[];
}

export interface IChapterObject {
    result: string;
    baseUrl: string;
    chapter: IChapterData;
}
