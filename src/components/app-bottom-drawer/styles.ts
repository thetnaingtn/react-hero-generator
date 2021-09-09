import styles from "styled-components/macro";

export const StylesMain = styles.main`
    padding: 5vmin 8vmin;
    display: grid;
    grid-template-columns: 5fr 2fr 3fr;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;

    @media screen and (max-width: 1000px){
        grid-template-columns:1fr;
        grid-template-rows: 1fr;
        grid-column-gap:0;
    }

    @media screen and (max-width: 600px){
        padding: 4vmin 4vmin;
    }
`;
