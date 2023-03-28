import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError(
      location.state?.error?.message || "An unexpected error has occurred."
    );
  }, [location]);

  console.error(error);

  const navigate = useNavigate();

  return (
    <div className="bg-gray-600 ">
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-8">{`Sorry, ${error}`}</p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded inline-block"
          aria-label="back button"
          onClick={() => navigate(-1)}
        >
          Back to safety
        </button>
      </div>
    </div>
  );
}
