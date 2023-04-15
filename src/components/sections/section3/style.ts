import styled from "styled-components";

export const Section3Styled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    position: relative;

    .subtitle {
        padding-bottom: 24px;

        text-transform: uppercase;
        font-family: var(--font-roboto);
        font-style: italic;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-dark-1);
    }

    .paddingLocationScroll {
        padding-bottom: 71px;
    }
`;
