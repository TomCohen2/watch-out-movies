import React from "react";
import Thumbnail from "./Thumbnail";

export default function Results({ results }) {
  return (
    <div className="px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 3xl:flex">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}
