import React from "react";
import styled from "styled-components";

// import classes from './Layout.css';

const StyledLayout = styled.div`
  margin-top: 18px;
`;

const Layout = props => {
  return (
    <>
      <div>Toolbar, sidebar, backdrop</div>
      <StyledLayout>{props.children}</StyledLayout>
    </>
  );
};

export default Layout;
