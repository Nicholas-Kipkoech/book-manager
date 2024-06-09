/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from './data/graphql-data'
import { useEffect, useState } from 'react'
import BookComponent from './components/BookComponent'
import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList'
import { FcReading } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

export interface IBook {
  author: string
  readingLevel: string
  title: string
  coverPhotoURL: string
}

function App() {
  const { data, loading, error } = useQuery(GET_BOOKS)
  const [books, setBooks] = useState<IBook[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(9)

  useEffect(() => {
    if (data) {
      setBooks(data.books)
    }
  }, [data])

  // loading more items on the page
  function loadMoreItems() {
    setItemsPerPage((prevItemsPerPage) => prevItemsPerPage + 9)
  }

  /**
   * Results returned into search container when a user types something.
   */

  const searchResults =
    searchTerm.trim() === ''
      ? [] // Return empty array if search term is empty
      : books.filter((book) => {
          const searchTermLower = searchTerm.toLowerCase().trim()
          const bookTitleLower = book.title.toLowerCase().trim()
          return bookTitleLower.includes(searchTermLower)
        })

  // process of data fetching...
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="App">
      <div>
        <div className="heading">
          <p>FullStack Take Home Test</p>
          <Link
            to={'/reading-list'}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FcReading size={40} />
            Reading List
          </Link>
        </div>
        <div className="search-bar-container">
          <SearchBar searchQuery={searchTerm} setSearchQuery={setSearchTerm} />
          <SearchResultsList results={searchResults} />
        </div>
        <div className="data-box">
          {books.slice(0, itemsPerPage).map((book, key) => (
            <BookComponent book={book} key={key} />
          ))}
        </div>
        {books.length > itemsPerPage && (
          <Button
            onClick={loadMoreItems}
            variant="contained"
            style={{
              background: ' #53c2c2',
            }}
            className="loadmore-btn"
          >
            Load More books
          </Button>
        )}
      </div>
    </div>
  )
}

export default App
