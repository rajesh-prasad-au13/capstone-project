import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="head">
            <h1 style={{cursor:"pointer"}} onClick={() => window.scroll(0,0)}>Movies TMDB
            </h1>
        </div>
    )
}

export default Header
