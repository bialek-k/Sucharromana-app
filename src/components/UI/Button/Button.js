import React from "react";
import { StyledButton, StyledButtonLink } from "./Button.styled";

const Button = (props) => {
  if (props.href) {
    return (
      <StyledButtonLink onClick={props.onClick} href={props.href}>
        {props.name}
      </StyledButtonLink>
    );
  }

  return <StyledButton onClick={props.onClick}>{props.name}</StyledButton>;
};

export default Button;
