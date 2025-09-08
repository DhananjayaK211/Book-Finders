import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'

export default function App(){
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [queryInfo, setQueryInfo] = useState('')

  async function handleSearch(query){
    if(!query) {
      setError('Please enter a book title or keyword.')
      setBooks([])
      return
    }
    setLoading(true)
    setError('')
    setQueryInfo(`Searching for “${query}”...`)
    try{
      const res = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=30`)
      if(!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      if(!data.docs || data.docs.length === 0){
        setError('No results found.')
        setBooks([])
      } else {
        setBooks(data.docs)
        setQueryInfo(`${data.docs.length} results`)
      }
    }catch(err){
      setError('Failed to fetch results. Try again later.')
      setBooks([])
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="hero">
        <div className="hero-inner">
          <h1>Book Finder</h1>
          <p className="tagline">Find books fast — covers, authors, and quick details from Open Library.</p>
          <SearchBar onSearch={handleSearch} />
          <p className="hint">Try: <button className="chip" onClick={()=>handleSearch('Pride and Prejudice')}>Pride and Prejudice</button> <button className="chip" onClick={()=>handleSearch('Data Science')}>Data Science</button></p>
        </div>
      </header>

      <main className="container">
        {loading && <p className="status">Loading…</p>}
        {error && <p className="status error">{error}</p>}
        {!loading && !error && queryInfo && <p className="status muted">{queryInfo}</p>}

        <section className="grid">
          {books.map((b, idx) => (
            <BookCard key={b.key + idx} book={b} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Built for Alex • Data from Open Library • Lightweight React + Vite</p>
      </footer>
    </div>
  )
}
