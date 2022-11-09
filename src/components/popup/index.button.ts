import styled from 'styled-components'

export const PopupButton = styled.button<{
  dark: boolean // dark
}>`
  font-family: var(--body-font) !important;
  align-items: center;
  outline: none;
  display: inline-flex;
  transition: all 0.3s;
  cursor: pointer;
  text-transform: uppercase;

  background-color: ${(props) => (props.theme === 'true' ? 'black' : 'white')}};

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
`
