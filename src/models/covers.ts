export interface IAttributes {
    description: string;
    volume?: any;
    fileName: string;
    locale: string;
    createdAt: string;
    updatedAt: string;
    version: number;
}

export interface IRelationship {
    id: string;
    type: string;
}

export interface ICoverData {
    id: string;
    type: string;
    attributes: IAttributes;
    relationships: IRelationship[];
}

export interface ICoverObject {
    result: string;
    status: string;
    data: ICoverData;
}
