import React from "react";
import { IBook } from "../App";

const SearchResult: React.FC<{ result: IBook }> = ({ result }) => {
  return (
    <div className="search-result">
      <img src={result.coverPhotoURL} height={30} width={30} />
      <div>{result.title}</div>
    </div>
  );
};

export default SearchResult;
