import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "./data/graphql-data";
import { useEffect, useState } from "react";
import BookComponent from "./components/BookComponent";

export interface IBook {
  author: string;
  readingLevel: string;
  title: string;
  coverPhotoURL: string;
}

function App() {
  const { data, loading, error } = useQuery(GET_BOOKS);
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <div>
        <div className="search-bar-container">
          <div>Search bar</div>
          <div>Search Results</div>
        </div>
        <div className="data-box">
          {books.map((book, key) => (
            <BookComponent book={book} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
