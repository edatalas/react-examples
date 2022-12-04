import styled from "styled-components";

export const Area = styled.div`
  background-color: #F9F9FB;
  position: relative;
  padding-top: 175px;
  
  .title {
    text-align: center!important;
  }
  
  .title h3 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 50px;
    line-height: 60px;
    color: #1D1D1D;
    padding-bottom: 125px;
  }
`

export const Breadcurms = styled.div`
  border-bottom: 1px solid #f1f1f1;
  background-color: #fff;
  padding-top: 15px;
  
  .items li:not(:last-child)::after {
    display: inline-block;
    color: #707070;
    content: ">";
    position: absolute;
    right: -17px;
    top: 0px;
    font-size: 18px;
  }
  
  .item{
    position: relative;
    display: inline-block;
    margin-right: 25px;
    list-style: none;
  }
  
  .item a {
    font-family: "Roboto", sans-serif;
    font-size: 15px;
    line-height: 25px;
    color: var(--clr-common-body);
    -webkit-transition: all 0.3s ease-out 0s;
    -moz-transition: all 0.3s ease-out 0s;
    -ms-transition: all 0.3s ease-out 0s;
    -o-transition: all 0.3s ease-out 0s;
    transition: all 0.3s ease-out 0s;
    text-decoration-line: none;
  }
  

`