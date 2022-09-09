import styled from "styled-components";

export const Area = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(6px);
  z-index: 1;
  
  .content {
      position: relative;
      width: 600px;
      padding: 2rem;
      border-radius: 1rem;
      background-color: #000000c4;
      font-size: 1.4rem;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      @media (max-width: 768px) {
        width: 90vw;
      }
  }
  
  .title {
    font-family: 'Secular One', sans-serif;
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color: white;
  }
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`