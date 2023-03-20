import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ChapterFeed } from "../components/chapterFeed";
import { MangaInfoSheet } from "../components/mangaInformation";

export function MangaPage() {
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
      <ChapterFeed
        mangaId={mangaData.id}
        coverFile={coverFile}
        mangaData={mangaData}
      />
    </>
  );
}
