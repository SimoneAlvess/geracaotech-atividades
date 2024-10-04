import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px 20px 25px;
  & h1 {
    color: #fff;
  }
  & nav ul {
    display: flex;
    gap: 2em;
    list-style: none;
    & li a {
      color: #ffffff80;
      text-decoration: none;
      font-size: 18px;
      &:hover,
      &.active {
        color: #fff;
        border-bottom: 2px solid #fff;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer className="bg-cyan-800">
      <h1>LOGO</h1>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/cursos"}>Cursos</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
