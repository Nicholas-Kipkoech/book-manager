import React from "react";
import { IBook } from "../App";
import SearchResult from "./SearchResult";

const SearchResultsList: React.FC<{ results: IBook[] }> = ({ results }) => {
  return (
    <div>
      {results.length > 0 && (
        <div className="results-list">
          {results.map((result, key) => (
            <SearchResult
              coverPhotoURL={result.coverPhotoURL}
              title={result.title}
              key={key}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsList;
