export interface IMangaObject {
    result: string;
    response: string;
    data: IMangaData;
    limit: number;
    offset: number;
    total: number;
}

export interface IMangaData {
    id: string;
    type: string;
    attributes: IMangaAttributes;
    relationships: IMangaRelationship[];
}

export interface IMangaAttributes {
    title: IMangaTitle;
    altTitles: IMangaAltTitle[];
    description: IMangaDescription;
    isLocked: boolean;
    links: IMangaLinks;
    originalLanguage: string;
    lastVolume?: string;
    lastChapter?: string;
    publicationDemographic?: string;
    status: string;
    year?: number;
    contentRating: string;
    tags: IMangaTag[];
    state: string;
    chapterNumbersResetOnNewVolume: boolean;
    createdAt: string;
    updatedAt: string;
    version: number;
    availableTranslatedLanguages: string[];
    latestUploadedChapter: string;
}

export interface IMangaTitle {
    en: string;
    "ja-ro": string;
}

export interface IMangaAltTitle {
    en?: string;
    "ja-ro"?: string;
    fr?: string;
    ru?: string;
    ja?: string;
    ko?: string;
    "zh-hk"?: string;
    "pt-br"?: string;
    vi?: string;
    th?: string;
    zh?: string;
    ne?: string;
    uk?: string;
    "es-la"?: string;
    pl?: string;
}

export interface IMangaDescription {
    en?: string;
    "pt-br"?: string;
    pl?: string;
    ja?: string;
    vi?: string;
    "es-la"?: string;
}

export interface IMangaLinks {
    al?: string;
    mu?: string;
    amz?: string;
    mal?: string;
    raw?: string;
    engtl?: string;
    ap?: string;
    bw?: string;
    kt?: string;
    nu?: string;
    cdj?: string;
    ebj?: string;
}

export interface IMangaTag {
    id: string;
    type: string;
    attributes: IMangaTagAttributes;
    relationships: any[];
}

export interface IMangaTagAttributes {
    name: IMangaTitle;
    description: any;
    group: string;
    version: number;
}

export interface IMangaRelationship {
    id: string;
    type: string;
    related?: string;
}
