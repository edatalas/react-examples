import styled from "styled-components";

export const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  .nav-items ul li {
    display: inline-block;
    margin: 0px 18px;
    position: relative;
  }
  
  .nav-items ul li a {
    font-size: 15px;
    color: #1D1D1D;
    display: block;
    padding: 32px 0px;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 1;
  }
`;