import React from 'react'
import './auth.css'
import { BrowserRouter as Link } from "react-router-dom";
function auth() {
    return (
        <div className="Navbar">
           <nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <a class="navbar-brand" href="#">Bingewatchers</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/trending">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Signin/Signup</a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}
export default auth;