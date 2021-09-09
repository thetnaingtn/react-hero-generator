import styles from "styled-components/macro";

type StyleCodeProps = { html?: boolean };

export const StylesCopyButton = styles.div`
    width: 100%;
    height: 200px;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 1) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    & button {
        display: block;
        margin-top: 70px;
        font-family: "Whitney A", "Whitney B";
        font-style: normal;
        font-weight: 400;
        height: 35px;
    }
`;

export const StylesCode = styles.pre<StyleCodeProps>`
    font-size: 13px;
    padding: 0 15px;
    margin-top: ${({ html }) => (html ? "-15px" : "-35px")};
    border-radius: 8px;
`;
