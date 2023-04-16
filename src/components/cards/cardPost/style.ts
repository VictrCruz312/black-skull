import styled from "styled-components";

export const CardPostStyled = styled.div`
    width: 376px;
    height: 380px;
    min-width: 376px;
    min-height: 380px;
    max-height: 380px;

    overflow: hidden;
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;

    :hover .containerImage img {
        width: 120%;
        height: 230px;
    }

    .containerImage {
        width: 100%;
        height: 200px;
        max-height: 200px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;

        img {
            position: absolute;
            top: 0;

            width: 100%;
            height: 200px;

            transition: 0.2s ease-in-out;
        }
    }

    :hover .containerInfos .containerButton svg {
        transform: translateX(0%);
    }

    :hover .containerInfos {
        background: var(--color-dark-2);
    }

    .containerInfos {
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        width: 100%;
        height: 180px;
        padding: 15px 32px 24px 24px;
        border: 1px solid var(--color-dark-3);
        border-top: none;

        transition: 0.2s ease-in-out;
        background: var(--color-dark-1);

        .date {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: var(--color-gray-2);
        }

        .description {
            font-weight: 700;
            font-size: 18px;
            line-height: 22px;
            text-transform: uppercase;
            color: var(--color-white);
        }

        .containerButton {
            position: relative;
            display: flex;
            align-items: center;

            .buttonMais {
                background: var(--color-orange-1);
                border-radius: 4px;
                border: none;

                width: 138px;
                height: 40px;
                padding: 0;
                margin: 0;

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

            svg {
                height: 18px;
                width: 18px;

                position: absolute;
                right: -30px;

                color: var(--color-orange-1);

                transform: translateX(-190%);
                transition: 0.2s ease-in-out;
            }
        }
    }
`;
