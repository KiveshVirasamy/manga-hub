import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    setError(
      location.state?.error?.message ?? "An unexpected error has occurred."
    );
  }, [location]);

  console.error(error);

  const navigate = useNavigate();

  return (
    <div className="bg-blue-600 h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-white mb-4">Oops!</h1>
        <p className="text-lg text-gray-200 mb-8">{`Sorry, ${error}`}</p>
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          aria-label="Back to previous page"
          onClick={() => navigate(-1)}
        >
          Back to safety
        </button>
      </div>
    </div>
  );
}
