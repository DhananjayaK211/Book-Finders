import React from 'react'

function coverUrl(cover_i){
  return cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}-L.jpg` : '/default-cover.png'
}

export default function BookCard({ book }){
  const title = book.title || 'Untitled'
  const author = book.author_name ? book.author_name.join(', ') : 'Unknown author'
  const year = book.first_publish_year || book.publish_year && book.publish_year[0] || '—'
  const cover = coverUrl(book.cover_i)

  // link to openlibrary page
  const olLink = `https://openlibrary.org${book.key}`

  return (
    <article className="card">
      <a className="cover-wrap" href={olLink} target="_blank" rel="noopener noreferrer">
        <img src={cover} alt={title} loading="lazy" />
      </a>
      <div className="card-body">
        <h3 className="book-title"><a href={olLink} target="_blank" rel="noopener noreferrer">{title}</a></h3>
        <p className="muted">{author}</p>
        <div className="meta">
          <span>{year}</span>
          {book.language && <span className="pill">{book.language[0]}</span>}
        </div>
      </div>
    </article>
  )
}
