import React from "react";
import { IBook } from "../App";

const SearchResult: React.FC<Partial<IBook>> = ({ coverPhotoURL, title }) => {
  return (
    <div className="search-result">
      <img src={coverPhotoURL} height={30} width={30} />
      <div>{title}</div>
    </div>
  );
};

export default SearchResult;
