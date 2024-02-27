import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <NavLink to="/global_simple_map">Simple Map</NavLink>
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
