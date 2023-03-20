import { useLocation } from "react-router-dom";

/**
 * Props for the MangaPage component
 */
interface MangaPageProps {
  // Additional props can be added here
}

/**
 * Component that displays the manga page.
 */
export function MangaPage(_props: MangaPageProps) {
  // Get the state from the location
  const location = useLocation();
  const test = location;

  console.log(test); // just here to test data for now

  return <h1>hi</h1>;
}
