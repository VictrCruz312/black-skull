import styled from "styled-components";

export const ScrollTopStyled = styled.div`
    position: fixed;
    bottom: 70px;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    .scrollTopButton {
        margin: 0;
        padding: 0;
        border: none;

        width: 56px;
        height: 56px;

        background: var(--color-dark-3);

        border: 1px solid var(--color-gray-1);
        border-radius: 4px;

        :focus {
            outline: none;
        }
        :hover {
            background: var(--color-orange-1);
            border: 1px solid var(--color-black-1);
        }

        :hover svg {
            color: var(--color-black-1);
        }

        svg {
            color: var(--color-gray-1);
            width: 30px;
            height: 30px;
        }
    }

    .chatButton {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 10px;
        width: 124px;
        height: 40px;
        margin: 0;
        border: none;

        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-align: center;

        color: var(--color-black-1);
        background: var(--color-orange-1);

        :focus {
            outline: none;
        }

        :hover {
            background: var(--color-orange-2);
        }
    }
`;
