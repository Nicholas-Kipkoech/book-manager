import React, { createContext, useState } from 'react'
import { IBook } from '../App'

interface SelectedBookContextType {
  books: IBook[]
  setBooks: (books: IBook[]) => void
}

export const BookContext = createContext<SelectedBookContextType>({
  books: [],
  setBooks: () => {},
})

export const BookContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [books, setBooks] = useState<IBook[]>([])

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  )
}
