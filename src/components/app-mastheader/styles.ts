import styles, { css } from "styled-components/macro";

type StylesMastHeadProps = {
  background?: string;
};

type StylesMastHeadTitleProps = {
  marginBottom: number;
};

type StylesMastHeadButtonProps = {
  buttonHoverColor: string;
  borderRadius: number;
  buttonColor: string;
  button: boolean;
};

export const StylesMastHead = styles.section<StylesMastHeadProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    ${({ background }) =>
      background &&
      css`
        background: ${background};
      `}
    background-size: cover !important;
`;

export const StylesMastHeadTitle = styles.h1.attrs<StylesMastHeadTitleProps>(
  ({ marginBottom }) => ({
    style: {
      marginBottom,
    },
  })
)<StylesMastHeadTitleProps>`
    font-family: "Tungsten A", "Tungsten B";
    font-style: normal;
    font-weight: 500;
    color: #eee;
    font-size: 11vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const StylesMastHeadButton = styles.button.attrs<StylesMastHeadButtonProps>(
  ({ buttonColor, borderRadius, button }) => ({
    style: {
      display: button ? "block" : "none",
      backgroundColor: buttonColor,
      borderRadius,
    },
  })
)<StylesMastHeadButtonProps>`
    display: inline-block;
    border: none;
    padding: 0.75rem 1.5rem;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1.2rem;
    cursor: pointer;
    text-align: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: background ease .25s;
    &:focus{
        outline: 1px solid #fff;
        outline-offset: -4px;
    }
    &:hover{
      background-color:${({ buttonHoverColor }) =>
        `${buttonHoverColor} !important`}
    }
`;
