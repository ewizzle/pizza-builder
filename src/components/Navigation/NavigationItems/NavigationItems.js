import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem/NavigationItem";

const StyledNavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;

const navigationItems = props => (
  <StyledNavigationItems>
    <NavigationItem link="/" exact>
      Sandwich Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/auth">Authenticate</NavigationItem>
    ) : (
      <NavigationItem link="/logout">Logout</NavigationItem>
    )}
  </StyledNavigationItems>
);

export default navigationItems;
