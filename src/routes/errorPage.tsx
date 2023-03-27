import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ErrorPage(): JSX.Element {
  const location = useLocation();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError(
      location.state?.error?.message || "An unexpected error has occurred."
    );
  }, [location]);

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, {error}</p>
    </div>
  );
}
