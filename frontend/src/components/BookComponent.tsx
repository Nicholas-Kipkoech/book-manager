import React from 'react'
import { IBook } from '../App'
import { Button } from '@mui/material'
import { useLocalStorage } from '../hooks/useLocalstorage'

const BookComponent: React.FC<{ book: IBook }> = ({ book }) => {
  const [readingList, setReadingList] = useLocalStorage<IBook[]>(
    'readingList',
    [],
  )
  // Check where the book is in the reading list array
  const isInList = readingList.some((item: IBook) => item.title === book.title)

  function addToReadingList(book: IBook) {
    // Fetch the current reading list from localStorage
    const storedReadingList = JSON.parse(
      localStorage.getItem('readingList') || '[]',
    )

    // Check if the book is already in the reading list
    const isAlreadyInList = storedReadingList.some(
      (item: IBook) => item.title === book.title,
    )

    if (!isAlreadyInList) {
      // Add the new book to the reading list
      const updatedReadingList = [...storedReadingList, book]
      setReadingList(updatedReadingList)
    }
  }
  /**
   *
   * @param book function to remove a book which already exists in the storage
   * @returns
   */

  function removeBook(book: IBook) {
    const storedReadingList = JSON.parse(
      localStorage.getItem('readingList') || '[]',
    )
    // Check if the book is already in the reading list then remove
    const updatedReadinglist = storedReadingList.filter(
      (item: IBook) => item.title !== book.title,
    )
    // Update the current reading list after removing the book
    setReadingList(updatedReadinglist)
  }

  return (
    <div className="book-box">
      <img src={`${book.coverPhotoURL}`} alt={`${book.title} cover`} />
      <p className="book-title">{book.title}</p>
      <p className="book-author">Author: {book.author}</p>
      {isInList ? (
        <Button
          variant="contained"
          style={{ background: '#f76434', color: 'white' }}
          onClick={() => removeBook(book)}
        >
          Remove from reading list
        </Button>
      ) : (
        <Button
          style={{ background: '#335c6e', color: 'white' }}
          onClick={() => addToReadingList(book)}
        >
          Add to reading list
        </Button>
      )}
    </div>
  )
}

export default BookComponent
