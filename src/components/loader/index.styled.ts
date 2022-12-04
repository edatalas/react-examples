import styled from "styled-components";

export const LoaderArea = styled.div`
  box-sizing: content-box;
  height: 40px;
  margin: 0 auto 10px auto;
  position: relative;
  width: 70px;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(90deg);
    }
    35% {
      transform: rotate(90deg);
    }
    45% {
      transform: rotate(180deg);
    }
    60% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    85% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    10% {
      -webkit-transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(90deg);
    }
    35% {
      -webkit-transform: rotate(90deg);
    }
    45% {
      -webkit-transform: rotate(180deg);
    }
    60% {
      -webkit-transform: rotate(180deg);
    }
    75% {
      -webkit-transform: rotate(270deg);
    }
    85% {
      -webkit-transform: rotate(270deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes bounce {
    0% {
      transform: scaleX(1);
    }
    10% {
      transform: scaleX(1);
    }
    20% {
      transform: scaleX(0.8);
    }
    35% {
      transform: scaleX(0.8);
    }
    45% {
      transform: scaleX(1);
    }
    60% {
      transform: scaleX(1);
    }
    75% {
      transform: scaleX(0.8);
    }
    85% {
      transform: scaleX(0.8);
    }
    100% {
      transform: scaleX(1);
    }
  }

  @-webkit-keyframes bounce {
    0% {
      -webkit-transform: scaleX(1);
    }
    10% {
      -webkit-transform: scaleX(1);
    }
    20% {
      -webkit-transform: scaleX(0.8);
    }
    35% {
      -webkit-transform: scaleX(0.8);
    }
    45% {
      -webkit-transform: scaleX(1);
    }
    60% {
      -webkit-transform: scaleX(1);
    }
    75% {
      -webkit-transform: scaleX(0.8);
    }
    85% {
      -webkit-transform: scaleX(0.8);
    }
    100% {
      -webkit-transform: scaleX(1);
    }
  }
  
  &:before {
    border: 2px solid #111;
    box-sizing: content-box;
    content: '';
    height: 0;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 0;
    text-align: center;
  }


  .spin {
    -webkit-animation: spin 2.25s linear infinite;
    animation: spin 2.25s linear infinite;
    height: 14px;
    left: 28px;
    position: absolute;
    top: 13px;
    width: 14px;

    &:before {
      border: 3px solid #111;
      box-sizing: content-box;
      content: '';
      height: 14px;
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(-50%, -50%) rotate(45deg);
      transform: translate(-50%, -50%) rotate(45deg);
      width: 14px;
    }
  }

  .bounce {
    -webkit-animation: bounce 2.25s linear infinite;
    animation: bounce 2.25s linear infinite;
    height: 100%;
    margin: 0 auto;
    position: relative;
    width: 100%;

    &:after,
    &:before {
      box-sizing: content-box;
      content: '';
      height: 10px;
      position: absolute;
      top: 13px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      width: 10px;
    }

    &:before {
      border-bottom: 3px solid #111;
      border-left: 3px solid #111;
    }

    &:after {
      border-right: 3px solid #111;
      border-top: 3px solid #111;
      right: 0;
    }
  }
  
`