import { NavLink } from "react-router";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="">fast react pizza co</h1>
      </header>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "" : "")} to="/">
          homepage
        </NavLink>
        <NavLink to="/about">about page</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </nav>
    </>
  );
}

export default Header;
