import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container">
      <section id="notFound">
        <h1>404</h1>
        <h2>Nothing here yet</h2>
        <Link to="/">Back to Main</Link>
      </section>
    </div>
  )
}

export default NotFound