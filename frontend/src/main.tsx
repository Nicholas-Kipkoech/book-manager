import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './index.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import ReadingList from './pages/ReadingList.tsx'
import { BookContextProvider } from './context/BookContext.tsx'

/**
 * Connecting to graphql API from the local server
 */

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BookContextProvider>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/reading-list" element={<ReadingList />} />
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </BookContextProvider>
  </React.StrictMode>,
)
