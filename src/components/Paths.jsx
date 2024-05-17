import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Paths() {
  return (
    <div className="App container-fluid">

      <nav class="navbar navbar-light bg-light">

        <div class="navbar-collapse">
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link"><Link className='nav-link' to="/home">Home </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link className='nav-link' to="/posts">Posts </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"> <Link className='nav-link' to="/comments">Comments </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link className='nav-link' to="/albums">Albums </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link className='nav-link' to="/photos">Photos </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link className='nav-link' to="/todos">Todos </Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><Link className='nav-link' to="/users">Users </Link></a>
              </li>

            </ul>
          </div>
        </nav>





      </nav>

      <div>

      </div>
    </div>

  )
}

export default Paths