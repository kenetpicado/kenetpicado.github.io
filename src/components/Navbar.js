export function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-4 sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bolder" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{props.children}</ul>
        </div>
      </div>
    </nav>
  );
}
