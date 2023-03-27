import { ChangeEvent } from "react";

export interface SearchMangaProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}