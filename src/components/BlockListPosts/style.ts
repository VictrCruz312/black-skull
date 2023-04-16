import styled from "styled-components";

export const BlockListPostsStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    position: relative;
    background: var(--color-gradient-dark);
    padding: 40px 0 0 0;

    .container {
        display: flex;
        justify-content: space-between;
        width: 100vw;
        padding: 0 56px;

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
            color: var(--color-white);

            span {
                color: var(--color-orange-1);
            }
        }

        .buttonTodos {
            background: var(--color-orange-1);

            border-radius: 4px;
            margin: 0;
            padding: 0;
            border: none;
            width: 127px;
            height: 40px;

            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--color-black-1);

            :focus {
                outline: none;
            }

            :hover {
                background: var(--color-orange-2);
            }
        }
    }

    .paddingLocationScroll {
        padding-bottom: 71px;
    }
`;
