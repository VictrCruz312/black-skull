import styled from "styled-components";

export const Section7Styled = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 64px;

    .titleSection {
        padding-bottom: 24px;

        font-family: var(--font-roboto);
        font-style: italic;
        font-weight: 700;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        text-transform: uppercase;
        color: var(--color-dark-1);
    }

    .containerObjetivos {
        display: flex;
        gap: 20px;
    }
`;
