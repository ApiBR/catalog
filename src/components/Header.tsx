import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  background: linear-gradient(90deg, #009b3a, #32cd32); /* Gradient */
  color: #fff;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  margin-bottom: 8px;
  background-color: #fff; /* White background */
  padding: 4px; /* Space between logo and background */
  border-radius: 8px; /* Rounded edges for a polished look */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
`;

const Title = styled.h1`
  margin: 8px 0 0;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  font-size: 1rem;
  color: #ffdf00; /* Brazilian flag yellow */
`;

const Header: React.FC = () => (
  <HeaderContainer>
    <Logo src="https://apibr.com/ApiBRLogo.png" alt="API BR Logo" />
    <Title>API BR - Catalog</Title>
    <Subtitle>Explore Brazilian data APIs</Subtitle>
  </HeaderContainer>
);

export default Header;
