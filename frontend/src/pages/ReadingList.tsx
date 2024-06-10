import React from 'react'
import { useLocalStorage } from '../hooks/useLocalstorage'
import { IBook } from '../App'

import { Button } from '@mui/material'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CustomListComponent: React.FC<{
  book: IBook
  setReadingList: (list: IBook[]) => void
}> = ({ book, setReadingList }) => {
  /**
   *
   * @param book Book be passed so as to remove
   */
  function removeBook(book: IBook) {
    const storedReadingList = JSON.parse(
      localStorage.getItem('readingList') || '[]',
    )
    // Check if the book is already in the reading list then remove
    const updatedReadinglist = storedReadingList.filter(
      (item: IBook) => item.title !== book.title,
    )
    setReadingList(updatedReadinglist)
  }

  return (
    <div className="book-box">
      <img src={`${book.coverPhotoURL}`} alt={`${book.title} cover`} />
      <p className="book-title">{book.title}</p>
      <p className="book-author">Author: {book.author}</p>

      <Button
        variant="contained"
        style={{ background: '#f76434', color: 'white' }}
        onClick={() => removeBook(book)}
      >
        Remove from reading list
      </Button>
    </div>
  )
}

const ReadingList = () => {
  const [readingList, setReadingList] = useLocalStorage<IBook[]>(
    'readingList',
    [],
  )

  return (
    <div className="reading-list-wrapper">
      <div>
        <div className="heading">
          <Link to={'/'}>
            <IoIosArrowRoundBack size={30} />
          </Link>
          <p>Reading List</p>
          <p></p>
        </div>

        <div className="data-box">
          {readingList.map((book, key) => (
            <CustomListComponent
              book={book}
              key={key}
              setReadingList={setReadingList}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ReadingList
