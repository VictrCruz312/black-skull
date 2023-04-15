import styled from "styled-components";

export const CardPeopleStyled = styled.div`
    position: relative;
    width: 277px;
    height: 294px;
    z-index: 100;
    overflow: hidden;

    img {
        width: inherit;
        height: inherit;
    }

    :hover {
        z-index: 1;
    }

    :hover .containerInfos {
        transform: translateX(0%);
        opacity: 1;
    }

    .containerInfos {
        position: absolute;
        bottom: 0;

        width: 100%;
        height: 98px;
        padding: 20px 0 20px 15px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        background: rgba(var(--color-dark-3-copy), 95%);

        opacity: 0;
        transform: translateX(-80%);
        transition: 0.2s ease-in-out;

        P {
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            text-transform: uppercase;
            color: var(--color-orange-1);
        }

        button {
            display: flex;
            align-items: center;
            gap: 4px;

            margin: 0;
            padding: 0;
            border: none;
            background: transparent;

            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            text-transform: uppercase;
            color: var(--color-white);

            :focus {
                outline: none;
            }

            svg {
                width: 19px;
                height: 19px;
            }
        }
    }
`;
