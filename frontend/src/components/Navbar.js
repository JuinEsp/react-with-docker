import React from 'react'

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand"  href={{}}>
            Turmas e Alunos
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href={{}}>
                  Alunos <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={{}}>
                  Alunos em turmas
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  href={{}}
                >
                  Opções
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href={{}}>
                    Action
                  </a>
                  <a className="dropdown-item" href={{}}>
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href={{}}>
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    )
}