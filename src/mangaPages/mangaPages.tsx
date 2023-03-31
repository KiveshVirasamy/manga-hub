import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { MangaChapterList } from "../mangaComponents/mangaChapters";
import { MangaInfoSheet } from "../mangaComponents/mangaInformation";

export function MangaDetailsPage() {
  const location = useLocation();
  const [mangaData, coverFile] = useMemo(
    () => location.state,
    [location.state]
  ); // use useMemo to avoid unnecessary renders

  return (
    <>
      <MangaInfoSheet
        mangaData={mangaData}
        coverFile={coverFile}
        mangaId={mangaData.id} // set the mangaId to mangaData.id
      />
      <MangaChapterList
        mangaId={mangaData.id}
        coverFile={coverFile}
        mangaData={mangaData}
      />
    </>
  );
}
