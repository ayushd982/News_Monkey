import React, { Component } from 'react'

export class navbar extends Component {
  render() {
    return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="window.location">NewsMonkey</a>
                {/* window.location:- The window.location.href property returns the URL of the current page. */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {/*collapse navbar-collapse:- The collapse in bootstrap is used for space-saving of large content. It is hidden and shows the content when the user wants */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                    </li>
                </ul> 
                </div>
            </div>
            </nav>
                </div>
    )
  }
}

export default navbar
