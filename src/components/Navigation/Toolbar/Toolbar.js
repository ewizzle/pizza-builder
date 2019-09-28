import React from "react";
import styled from "styled-components";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const StyledToolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  nav {
    height: 100%;
  }

  @media (max-width: 499px) {
    .DesktopOnly {
      display: none;
    }
  }
`;

const toolbar = props => (
  <StyledToolbar>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className="DesktopOnly">
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </StyledToolbar>
);

export default toolbar;
