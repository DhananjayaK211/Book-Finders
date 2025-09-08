import React, { useState } from 'react'

export default function SearchBar({ onSearch }){
  const [value, setValue] = useState('')

  function submit(e){
    e.preventDefault()
    onSearch(value.trim())
  }

  return (
    <form className="search" onSubmit={submit}>
      <input
        aria-label="Search books by title"
        value={value}
        onChange={e=>setValue(e.target.value)}
        placeholder="Search books by title (e.g. 'Dune', 'Shakespeare')"
      />
      <button type="submit">Search</button>
    </form>
  )
}
