export interface MediaInfo {
    id: string
    type: string
    attributes: MediaAttributes | string
    relationships: MediaRelationship[] | string
}

export interface MediaAttributes {
    title: { [key: string]: string }
    altTitles: { [key: string]: string }[] | string
    description: { [key: string]: string }[] | string
    isLocked: boolean
    links: { [key: string]: string }[] | string
    originalLanguage: string
    lastVolume: number | string
    lastChapter: number | string
    publicationDemographic: string
    status: string
    year: number | string
    contentRating: string
    tags: TagInfo[] | string
    state: string
    chapterNumbersResetOnNewVolume: boolean
    createdAt: string
    updatedAt: string
    version: number | string
    availableTranslatedLanguages: string[] | string
    latestUploadedChapter: string
}

export interface TagInfo {
    id: string
    type: string
    attributes: TagAttributes | string
    relationships: MediaRelationship[] | string
}

export interface TagAttributes {
    name: string | unknown
    description: string | unknown
    group: string
    version: number | string
}

export interface MediaRelationship {
    id: string
    type: string
    attributes?: MediaRelationshipAttributes | string
}

export interface MediaRelationshipAttributes {
    description: string
    volume: number | string
    fileName: string
    locale: string
    createdAt: string
    updatedAt: string
    version: number | string
}
