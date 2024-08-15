function Sidebar({ selectedTab }) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "280px" }}
      >
        <a
          Href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlink:Href="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a
              Href="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              } `}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:Href="#home"></use>
              </svg>
              Home
            </a>
          </li>
          <li>
            <a
              Href="#"
              className={`nav-link text-white ${
                selectedTab === "Create Post" && "active"
              } `}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:Href="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown">
          <a
            Href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li>
              <a className="dropdown-item" Href="#">
                New project...
              </a>
            </li>
            <li>
              <a className="dropdown-item" Href="#">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" Href="#">
                Profile
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" Href="#">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
