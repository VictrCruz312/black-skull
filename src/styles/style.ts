import styled from "styled-components";

export const ContainerSectionsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const LocationScrollStyled = styled.div`
    background-color: transparent;

    width: 100vw;
    position: absolute;
    bottom: 32px;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;

    .line {
        border-radius: 0.5px;
        width: 40px;
        max-width: 40px;
        height: 2px;
        max-height: 2px;
        padding: 0;
        margin: 0;
        background: var(--color-gray-2);

        cursor: pointer;
    }

    .focus {
        background: var(--color-orange-1);
        height: 6px;

        max-height: 6px;
    }
`;
