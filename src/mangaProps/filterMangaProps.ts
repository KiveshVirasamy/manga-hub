import { ChangeEvent } from "react";

export interface FilterMangaProps {

    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface FormValues {
    search: string;
}