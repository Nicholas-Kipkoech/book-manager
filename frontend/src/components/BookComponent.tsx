import React from 'react'
import { IBook } from '../App'
import { Button } from '@mui/material'
import { useLocalStorage } from '../hooks/useLocalstorage'

const BookComponent: React.FC<{ book: IBook }> = ({ book }) => {
  const [readingList, setReadingList] = useLocalStorage<IBook[]>(
    'readingList',
    [],
  )

  console.log(readingList)

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

  return (
    <div className="book-box">
      <img src={`${book.coverPhotoURL}`} alt={`${book.title} cover`} />
      <p className="book-title">{book.title}</p>
      <p className="book-author">Author: {book.author}</p>
      <Button variant="contained" onClick={() => addToReadingList(book)}>
        Add to reading list
      </Button>
    </div>
  )
}

export default BookComponent
