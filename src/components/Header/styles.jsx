import styled from "styled-components";
import { colors } from "../../styles/theme";

export const ContainerHeader = styled.header`
  position: fixed;
  backdrop-filter: blur(10px);
  width: 100vw;
  height: 7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  transition: background-color 1.3s ease;

  &.scrolled {
    background-color: ${colors.light};
    transform: scale(1.02);

    img {
      transform: scale(1.09);
    }

    nav li {
      transform: scale(1.09);
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100vw;

    nav {
      display: none;
    }
  }

  .menu-dog {
    display: none;

    .dropdown {
      position: absolute;
      list-style: none;
      background-color: #090909f0;
      backdrop-filter: blur(10px);
      color: #fff;
      border: none;
      border-radius: 5px;
      width: 100vw;
      right: -300px;
      height: 270px;
      z-index: 1000;
      transition: width 0.5s, background-color 0.5s;
      transition: transform 0.3s;

      li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top: 18px;
        font-size: 20px;
        color: #fff;

        :hover {
          color: red;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
      }
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      display: block;
      position: absolute;
      left: 50px;

      .icon-dog {
        z-index: 1000;
        user-select: none;
      }

      ul {
        list-style: none;
        transform: translateX(0);
        margin-top: 35px;
        margin-left: 50px;
      }
    }
  }

  .logo-header img {
    max-width: 150px;
    display: flex;
    height: auto;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      width: 100vw;
    }
  }

  nav ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    gap: 40px;
  }

  nav ul li {
    display: flex;
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;

    :hover {
      color: #f8f8f81f;
      font-weight: 700;
      text-shadow: 4px 10px black;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }
`;
