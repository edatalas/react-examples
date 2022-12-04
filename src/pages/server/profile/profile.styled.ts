import styled from "styled-components";

export const ProfileArea = styled.div`
  
  padding-bottom: 80px;
  padding-top: 130px;
  
    .log-out-btn{
      font-size: 16px;
      color: #1D1D1D;
      border: 1px solid #1D1D1D;
      padding: 0 40px;
      height: 50px;
      border-radius: 5px;
      display: inline-block;
      line-height: 48px;
      font-weight: 600;
    }
    .log-out-btn:hover {
      color: white;
      background: #1D1D1D;
    }
  
    .create-btn {
      height: 60px;
      background: #3817E3;
      width: 100%;
      display: block;
      text-align: center;
      border: 1px solid #3817E3;
      border-radius: 10px;
      line-height: 58px;
      color: white;
      font-weight: 700;
      position: relative;
      padding-left: 10px;
      margin-bottom: 50px;
    }
  
  .create-btn:hover {
    background-color: #2F92D4;
    color: white;
    border-color: #2F92D4;
  }

  .create-btn:before {
    position: absolute;
    content: "+";
    width: 40px;
    height: 40px;
    left: 10px;
    top: 10px;
    background: #4756e3;
    border-radius: 5px;
    font-weight: 500;
    line-height: 40px;
  }
`