import React from "react";
import styled from "styled-components";
import Link from "next/link";

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
    <Link href="/">Build Sandwich</Link>
    {props.isAuthenticated ? <Link href="/orders">Orders</Link> : null}
    {!props.isAuthenticated ? (
      <Link href="/auth">Authenticate</Link>
    ) : (
      <Link href="/logout">Logout</Link>
    )}
  </StyledNavigationItems>
);

export default navigationItems;
