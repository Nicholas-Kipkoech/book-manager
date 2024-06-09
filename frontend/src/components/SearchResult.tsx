import React from 'react'
import { IBook } from '../App'

const SearchResult: React.FC<{
  book: IBook
}> = ({ book }) => {
  return (
    <div className="search-result">
      <img src={book.coverPhotoURL} height={30} width={30} />
      <div>{book.title}</div>
    </div>
  )
}

export default SearchResult
