export interface IAttributes {
    volume?: any;
    chapter: string;
    title?: string | null;
    translatedLanguage: string;
    externalUrl?: any;
    publishAt: string | null;
    readableAt: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    pages: number;
    version: number;
}

export interface IRelationship {
    id: string;
    type: string;
}

export interface IChapters {
    id: string;
    type: string;
    attributes: IAttributes;
    relationships: IRelationship[];
}

export interface IChapterFeedObject {
    result: string;
    response: string;
    data: IChapters[];
    limit: number;
    offset: number;
    total: number;
}

export interface IChapterData {
    id: string;
    attributes?: IAttributes;
    chapter: number;
    pages: number;
}