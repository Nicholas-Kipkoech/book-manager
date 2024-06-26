import React, { useContext } from 'react'
import { IBook } from '../App'
import { BookContext } from '../context/BookContext'

const SearchResult: React.FC<{
  book: IBook
}> = ({ book }) => {
  const { setBooks, books } = useContext(BookContext)

  /**
   *
   * @param title A book title which will be used as unique parameter for searching for a book
   */

  function handleSearch(title: string) {
    if (!title || title.trim() === '') {
      // If title is empty or undefined, reset books to its original value
      setBooks(books)
    } else {
      // Filter books based on the title
      const filteredResults = books.filter((book) => book.title === title)
      setBooks(filteredResults)
    }
  }

  return (
    <div
      className="search-result"
      onClick={() => handleSearch(book.title)}
      tabIndex={0}
    >
      <img src={book.coverPhotoURL} height={30} width={30} />
      <div>{book.title}</div>
    </div>
  )
}

export default SearchResult
