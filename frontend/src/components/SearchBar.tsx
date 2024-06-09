import React from 'react'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="search for a book...."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
