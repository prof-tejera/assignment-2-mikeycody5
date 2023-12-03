import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
  background-color: darkred; /* Green color */
  color: #fff; /* White text */
  border: none;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s;

  &:hover {
    background-color: black; 
  }
`;



const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;


