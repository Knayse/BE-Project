import React from 'react'
import './style.css'

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Designed and built with <span className="Footer__Heart">&hearts;</span>{' '}
        by{' Group 19'}
        <a
          href="https://www.linkedin.com/in/ramiz-rahman/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        ></a>
      </section>
    </footer>
  )
}

export default Footer
