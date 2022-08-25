import styled from "styled-components";

export const Button = styled.button<{
    primary?: boolean;
}>`
  font-family: var(--body-font) !important;
  align-items: center;
  outline: none;
  display: inline-flex;
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;
  
  padding: ${(props) => {
    if (props.primary) return "0";
}};
  
  margin: ${(props) => {
    if (props.primary) return "0";
}};
  
  width: ${(props) => {
    if (props.primary) return "calc(100% - 59px)";
}};
  
  height: ${(props) => {
    if (props.primary) return "50px";
}};
  
  color: ${(props) => {
    if (props.primary) return "white";
}};
  
  border-radius: ${(props) => {
    if (props.primary) return "0";
}};
  
  border: 0.1px solid ${(props) => {
    if (props.primary) return "rgba(255,255,255,1)";
}};
  
  background: ${(props) => {
    if (props.primary) return "rgba(0, 0, 0, 0.2)";
}};
  
  justify-content: ${(props) => {
    if (props.primary) return "space-around";
}};
  
  font-size: ${(props) => {
    if (props.primary) return "16px";
}};
  
  font-weight: ${(props) => {
    if (props.primary) return "400";
}};

  :hover {
    -webkit-box-shadow: 0 10px 25px linear-gradient(135deg, var(--green-color) 10%, var(--pine-color));
    transform: translateY(-0.1rem);
    
    box-shadow: ${(props) => {
    if (props.primary) return "0 0 32px rgb(255 255 0 / 39%)";
}};
  }
  
  @media only screen and (max-width: 575px) {
  }
  @media only screen and (max-width: 767px) {
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
  }
  @media only screen and (min-width: 1200px) and (max-width: 2000px) {
  }
`;