export function Loading(): JSX.Element {
  return (
    <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black">
      <div className="grid h-44 w-44 content-center justify-center">
        <img
          className="col-start-1 row-start-1 animate-pulse"
          src="src/assets/img/bigLogo.png"
          alt="aura"
        />
        <img
          className="relative top-16 right-1 col-start-1 row-start-1"
          src="src/assets/img/smallLogo.png"
          alt="cover"
        />
      </div>
    </div>
  );
}
