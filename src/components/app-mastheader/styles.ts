import styles from "styled-components/macro";

type stylesMastHeadProps = {
  background?: string;
};

type stylesMastHeadTitle = {
  marginBottom?: string;
};

type stylesMastHeadButtonProps = {
  borderRadius?: number;
  background?: string;
};

export const StylesMastHead = styles.section<stylesMastHeadProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    background-size: cover !important;
`;

export const StylesMastHeadTitle = styles.h1<stylesMastHeadTitle>`
    font-family: "Tungsten A", "Tungsten B";
    font-style: normal;
    font-weight: 500;
    color: #eee;
    font-size: 11vmin;
    letter-spacing: 0.03em;
    line-height: 1;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
`;

export const StylesMastHeadButton = styles.button<stylesMastHeadButtonProps>`
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
`;
