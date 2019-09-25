import React from "react";
import styled from "styled-components";

const StyledSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;

  :after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 6px;
    box-sizing: border-box;
    border: 50px solid #fff;
    border-color: #407f7f transparent #003333 transparent;
    animation: Hourglass 1.2s infinite;
  }
  @keyframes Hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`;

const Spinner = () => <StyledSpinner>Loading...</StyledSpinner>;

export default Spinner;
