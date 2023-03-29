interface Author {
    name: string;
}

interface Chapter {
    id: string;
    title: string;
    chapter: string;
}

interface CoverArt {
    url: string;
}

interface Manga {
    id: string;
    title: {
        en?: string;
        jp?: string;
    };
    description: {
        en?: string;
        jp?: string;
    };
    author: Author[];
    artist: Author[];
    cover_art: CoverArt[];
    chapters: Chapter[];
}

export interface MangaSearchResult {
    id: string;
    title: string;
    coverUrl: string;
}

export interface MangaDetails {
    id: string;
    title: string;
    synopsis: string;
    coverUrl: string;
    authors: Author[];
    artists: Author[];
    chapters: Chapter[];
}

export interface MangaSearchResponse {
    results: MangaSearchResult[];
}