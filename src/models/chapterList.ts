export interface IAttributes {
    volume?: any;
    chapter: string;
    title?: string;
    translatedLanguage: string;
    externalUrl?: any;
    publishAt: string;
    readableAt: string;
    createdAt: string;
    updatedAt: string;
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
