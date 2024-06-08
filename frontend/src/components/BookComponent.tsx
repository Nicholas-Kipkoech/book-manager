import React from "react";
import { IBook } from "../App";

const BookComponent: React.FC<{ book: IBook }> = ({ book }) => {
  return (
    <div className="book-box">
      <img src={`${book.coverPhotoURL}`} />
      <p className="book-title">{book.title}</p>
      <p className="book-author">Author: {book.author}</p>
    </div>
  );
};

export default BookComponent;
