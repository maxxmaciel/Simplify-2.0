import React from 'react'
import lupaBlue from "../imagens/lupa.png"
import lupaWhite from "../imagens/search_white.png"

function Search() {
  return (
    <div className="search-div">
      <input placeholder="O que você está procurando?"    >

      </input>
      <div id="search">
      <img src={lupaBlue} alt="" id="search_pag_home" />
      <img src={lupaWhite} alt="" id="search_white" />
      </div>
    </div>
  )
}

export default Search