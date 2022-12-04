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
  
  .dashboard-btn {
    font-size: 15px;
    color: #3817E3;
    height: 45px;
    line-height: 44px;
    text-align: center;
    padding: 0px 28px;
    display: inline-block;
    background: transparent;
    font-weight: 500;
    border: 1px solid #3817E3;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-out 0s;
    border-radius: 30px;
  }
  
  .dashboard-btn:hover {
    background-color: #3817E3;
    color: white;
  }
`;