import styled from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 104px;

    background: var(--color-black-1);

    .containerInfos {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 56px;
        height: 32px;

        background-color: var(--color-dark-1);

        a {
            font-family: "Barlow";
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            text-transform: uppercase;
            color: var(--color-orange-1);
        }

        .noticias {
            display: flex;
            gap: 11px;
            align-items: center;

            p {
                font-family: "Barlow";
                font-weight: 500;

                font-size: 10px;
                line-height: 12px;

                text-transform: uppercase;
                color: var(--color-gray-2);
            }

            svg {
                width: 20px;
                height: 20px;
                color: var(--color-orange-1);
            }
        }
    }

    .containerUtils {
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 72px;
        min-height: 72px;
        padding: 0 56px;

        .logo {
            img {
                width: 166px;
                height: 32px;
            }
        }

        .navigation {
            display: flex;
            gap: 27px;

            padding: 0 43px;

            a {
                font-family: "Barlow";
                font-weight: 700;

                font-size: 14px;
                line-height: 16px;

                text-align: center;
                text-transform: uppercase;

                color: #9a9a9a;
            }
        }

        .search {
            width: 216px;
            height: 40px;

            .containerSearch {
                display: flex;

                width: inherit;
                height: inherit;

                background: var(--color-dark-1);
                border: 1px solid var(--color-dark-1);
                border-radius: 4px;

                input {
                    background: inherit;
                    border: none;

                    width: 80%;
                }

                button {
                    background: inherit;

                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    svg {
                        path {
                        }
                        width: 30px;
                        height: 24px;
                        color: var(--color-gray-1);
                    }
                }
            }
        }
    }
`;
