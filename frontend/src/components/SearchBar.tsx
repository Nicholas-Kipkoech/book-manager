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

  /**
   *
   * @param event keyboard event which listens to use key stroke
   */

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    //check if the searchQuery is empty and the event key is "Enter"
    if (searchQuery === '' && event.key === 'Enter') {
      // Reload so as to refetch all the books. This can be optimised in future
      window.location.reload()
    }
  }

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="search for a book...."
        value={searchQuery}
        onChange={handleChange}
        onKeyUp={(event) => handleKeyPress(event)}
      />
    </div>
  )
}

export default SearchBar
