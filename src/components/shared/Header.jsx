import "./shared-comp.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <h1 className="nav-logo-text">
            Presento
            <span>.</span>
          </h1>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="http://facebook.com">Home</a>
            </li>
            <li>
              <a href="http://facebook.com">About</a>
            </li>
            <li>
              <a href="http://facebook.com">Services</a>
            </li>
            <li>
              <a href="http://facebook.com">Portfolio</a>
            </li>
            <li>
              <a href="http://facebook.com">Team</a>
            </li>
            <li>
              <a href="http://facebook.com">Blog</a>
            </li>
            <li>
              <a href="http://facebook.com">Drop Down</a>
            </li>
            <li>
              <a href="http://facebook.com">Contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-btn-container">
          <button type="button" className="nav-btn">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
