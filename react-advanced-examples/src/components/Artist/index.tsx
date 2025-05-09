import { lazy, Suspense, useState } from "react";
import Loading from "../Loading";

const Albums = lazy(() => import("../Albums"));

const Artist = () => {
  const [showAlbums, setShowAlbums] = useState(false);

  return (
    <>
      <h1>Artist</h1>
      <button onClick={() => setShowAlbums(!showAlbums)}>
        {showAlbums ? "Hide Albums" : "Show Albums"}
      </button>
      {showAlbums && (
        <Suspense fallback={<Loading />}>
          <Albums />
        </Suspense>
      )}
    </>
  );
};

export default Artist;
