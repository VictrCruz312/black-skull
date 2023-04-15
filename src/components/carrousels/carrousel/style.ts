import styled from "styled-components";

export const CarrouselStyled = styled.div`
    padding: 0 56px 0 56px;
    width: 100vw;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: none;

    .arrows {
        position: absolute;
        top: 73px;
        width: 100vw;
        height: 20px;

        display: flex;
        justify-content: space-between;
        padding: 0 40px 0 40px;

        button {
            margin: 0;
            padding: 0;
            width: 32px;
            height: 32px;
            z-index: 2;
            background: var(--color-gray-2);
            border-radius: 4px;
            border: none;

            :hover {
                background: var(--color-orange-2);
            }
            :focus {
                outline: none;
            }
        }
    }
    .list {
        display: flex;
        gap: 20px;
        overflow-x: hidden;
        width: 100vw;
    }
`;
