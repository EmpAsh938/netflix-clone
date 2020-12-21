import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) =>
        src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
      top left / cover no-repeat;
  // min-height: 100vh;
  padding: 10px;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Frame = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;
export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const Feature = styled.div`
  width: 70vw;
  margin: 80px auto;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: center;

  @media (max-width: 700px) {
    width: 90vw;
    margin: 50px auto;
  }

  @media (max-width: 350px) {
    margin: 30px auto;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;

  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
`;

export const Container = styled(Background)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const ContainerTitle = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #ff1e1e;
    color: white;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.img`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const TextLink = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    column-gap: .5em;

    &:last-of-type {
      margin-bottom: 0;
    }
    ${TextLink} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  width: ${({ active }) => (active === true ? "200px" : "0px")};
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
