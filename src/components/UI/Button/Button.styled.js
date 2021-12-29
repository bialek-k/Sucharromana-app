import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  margin: 5px 10px 0px 0px;
  border: none;
  background: none;
  padding: 10px;
  font-weight: bold;
  font-size: 0.7rem;
  z-index: 20;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 2560px) {
    margin: 25px 25px 0px 0px;
    font-size: ${(props) => (props.menu ? "0.7rem" : "1.4rem")};
    padding: ${(props) => (props.menu ? "10px" : "25px")};
    /* padding: 25px; */
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 3px;
    right: 3px;
    background-color: rgb(255, 255, 255);
    z-index: -1;
    transition: transform 0.2s;

    @media screen and (min-width: 1024px) {
      background-color: ${(props) =>
        props.menu ? "white" : "rgb(255, 216, 41)"};
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -3px;
    right: -3px;
    border: 1px solid black;
    transition: transform 0.2s;
  }

  &:hover {
    &:before {
      transform: translate(5px, -5px);
    }
    &:after {
      transform: translate(-5px, 5px);
    }
  }
`;

export const StyledButtonLink = styled.a`
  position: relative;
  margin: 5px 10px 0px 0px;
  border: none;
  background: none;
  text-decoration: none;
  color: black;
  padding: 10px;
  font-weight: bold;
  font-size: 0.7rem;

  z-index: 20;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 2560px) {
    margin: 25px 25px 0px 0px;
    font-size: ${(props) => (props.menu ? "0.9rem" : "1.4rem")};
    padding: ${(props) => (props.menu ? "10px" : "25px")};
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 3px;
    right: 3px;
    background-color: rgb(255, 255, 255);
    z-index: -1;
    transition: transform 0.2s;

    @media screen and (min-width: 1024px) {
      background-color: ${(props) =>
        props.menu ? "white" : "rgb(255, 216, 41)"};
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -3px;
    right: -3px;
    border: 1px solid black;
    transition: transform 0.2s;
  }

  &:hover {
    &:before {
      transform: translate(5px, -5px);
    }
    &:after {
      transform: translate(-5px, 5px);
    }
  }
`;
