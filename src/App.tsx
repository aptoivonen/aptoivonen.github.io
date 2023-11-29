import './App.css';

export function App() {
  return (
    <>
      <header className="primary-header flex">
        <div>
          <a className="logo nav-link" href="#hero-section" aria-label="home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13 6"
              role="img"
            >
              <title>Logo</title>
              <path
                d="M 1,5 L 4,1 7,5 M 9,5 L 9,1 12,1"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1.1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
          aria-expanded="false"
          type="button"
        >
          <span className="sr-only">Menu</span>
          Menu icon
        </button>

        <nav>
          <ul
            className="primary-navigation flex"
            id="primary-navigation"
            data-visible="false"
          >
            <li>
              <a href="#hero-section">
                <span aria-hidden="true">00</span>Home
              </a>
            </li>
            <li>
              <a href="#about-section">
                <span aria-hidden="true">01</span>Destination
              </a>
            </li>
            <li>
              <a href="#projects-section">
                <span aria-hidden="true">02</span>Crew
              </a>
            </li>
            <li>
              <a href="#contact-section">
                <span aria-hidden="true">03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
}

export function WrappedApp() {
  return <App />;
}
