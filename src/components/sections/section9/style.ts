import styled from "styled-components";

export const Section9Styled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    width: 100vw;
    padding-bottom: 64px;
    position: relative;

    .title {
        z-index: 2;

        font-family: var(--font-roboto);
        font-style: italic;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-dark-1);
    }

    .description {
        max-width: 643px;

        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;

        color: var(--color-dark-3);
    }

    .image {
        z-index: 1;
        width: 160px;
        height: 160px;

        position: absolute;
        top: -100px;
    }
`;
