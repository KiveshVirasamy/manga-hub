// Import React library

// Define LandingPage component
export function LandingPage() {
  return (
    // Use a single div container to avoid unnecessary nesting
    <div className="flex h-full flex-grow flex-col justify-center items-center text-center text-neutral-200 pt-14">
      {/* Use a single paragraph element for the main heading */}
      <p className="font-semibold text-4xl text-center items-center flex flex-col pt-2">
        Welcome To
        {/* Use a single span element with appropriate CSS classes for the subheading */}
        <span className="text-amber-500 flex antialiased flex-auto items-center font-mono uppercase text-center">
          <span className="text-lg">Manga-</span>
          <span className="text-lg">Hub</span>
        </span>
      </p>
      {/* Use a single paragraph element for the main text */}
      <p className="text-sm p-4">
        Enter the realm of manga, where vivid art and thrilling storylines bring
        tales to life. Our extensive collection of manga titles is sure to
        fulfill your desire for epic clashes, metamorphoses, and indelible
        characters.
      </p>
    </div>
  );
}
