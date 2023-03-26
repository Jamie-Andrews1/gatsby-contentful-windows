import React from 'react';
import Navbar from './Navbar';
import '../styles/global.scss'

export default function Layout({ children
}) {
  return (
    <div>
      <Navbar />
      <div className="content">
        { children }
      </div>
      <footer>
        <p>&copy; 2023 JWindows</p>
      </footer>
    </div>
  )
}
