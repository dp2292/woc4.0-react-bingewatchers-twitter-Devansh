import React, { Component } from "react";
import './auth.css'
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { RiUserLine } from "react-icons/ri";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

class auth extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      hasAgreed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <div classNameName="Navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Bingewatchers</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/trending">Trending</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Signin/Signup</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="formCenter-login">
          Login
          <form onSubmit={this.handleSubmit} className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
              </label>
              <RiUserLine className="user-logo"/>
              <input
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="username"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
          
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
              </label>
              <RiLockPasswordLine className="user-logo" />
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="formField">
              <Link to="/">
                <button className="formFieldButton but">Login</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="formCenter">
          SignUp
          <form onSubmit={this.handleSubmit} className="formFields">
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
              </label>
              <RiUserLine className="user-logo"/>
              <input
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="username"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
          
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
              </label>
              <AiOutlineMail className="user-logo" />
              <input
                type="email"
                id="email"
                className="formFieldInput"
                placeholder="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
              </label>
              <RiLockPasswordLine className="user-logo" />
              <input
                type="password"
                id="password"
                className="formFieldInput"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="formField">
              <Link to="/">
                <button className="formFieldButton but">Sign Up</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default auth;