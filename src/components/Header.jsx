import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/global_simple_map">Simple Map</NavLink>
      <NavLink to="/my-location">My Location</NavLink>
      <NavLink to="/layer-control">Layer Control</NavLink>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
