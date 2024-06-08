/* eslint-disable react-hooks/exhaustive-deps */
import './App.css'
import { useQuery } from '@apollo/client'
import { GET_BOOKS } from './data/graphql-data'
import { useEffect, useState } from 'react'
import BookComponent from './components/BookComponent'
import SearchBar from './components/SearchBar'
import SearchResultsList from './components/SearchResultsList'
import { FcReading } from 'react-icons/fc'
import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'

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

  useEffect(() => {
    if (data) {
      setBooks(data.books)
    }
  }, [data])

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
          <Badge color="primary" badgeContent={4}>
            <Link to={'/reading-list'}>
              <FcReading size={40} />
            </Link>
          </Badge>
        </div>
        <div className="search-bar-container">
          <SearchBar searchQuery={searchTerm} setSearchQuery={setSearchTerm} />
          <SearchResultsList results={searchResults} />
        </div>
        <div className="data-box">
          {books.map((book, key) => (
            <BookComponent book={book} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
