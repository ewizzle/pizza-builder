import React from "react";
import styled from "styled-components";
// import Logo from "../../assets/images/logo.png";

const StyledLogo = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  img {
    height: 100%;
  }
`;

const logo = props => (
  <StyledLogo style={{ height: props.height }}>
    {/* <img src={Logo} alt="SandwichLogo" /> */}
  </StyledLogo>
);

export default logo;
