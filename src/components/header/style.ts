import styled from "styled-components";

export const HeaderStyled = styled.header`
    padding-top: 104px;
    .header {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 1000;

        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 104px;

        background: var(--color-black-1);
        border-bottom: 1px solid var(--color-dark-3);

        .containerInfos {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding: 0 56px;
            height: 32px;

            background-color: var(--color-dark-1);

            a {
                font-family: var(--font-barlow);
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
                    font-family: var(--font-barlow);
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
            gap: 4px;

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
                align-items: center;

                position: relative;
                padding: 0 43px;
                height: 100%;

                a {
                    font-family: var(--font-barlow);
                    font-weight: 700;

                    font-size: 14px;
                    line-height: 16px;

                    text-align: center;
                    text-transform: uppercase;

                    color: var(--color-gray-1);

                    height: 100%;
                    width: 103px;
                    text-align: center;
                    transition: 0.2s;
                    overflow: hidden;
                    z-index: 100;
                    padding-top: 28px;
                    transition: 0.2s ease-in-out;

                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: space-between;

                    :hover {
                        background: var(--color-dark-3);
                        color: var(--color-white);
                    }

                    :hover .lineEffect {
                        transform: translateX(0%);
                    }

                    .lineEffect {
                        transform: translateX(-80%);
                        transition: 0.2s ease-in-out;

                        width: 103px;
                        height: 3px;
                        background: var(--color-orange-1);
                        transform: translateX(-100%);
                    }
                }
            }

            .search {
                width: 216px;
                min-width: 180px;
                height: 40px;
                position: relative;
                border: 1px solid #3a3a3c;
                border-radius: 4px;

                input {
                    width: 100%;
                    height: 100%;

                    background: var(--color-dark-1);
                    border: inherit;
                    border-radius: inherit;
                    padding: 0 0 0 16px;

                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;
                    color: var(--color-gray-1);

                    :hover {
                        background: var(--color-dark-2);
                    }
                    ::placeholder {
                        font-weight: inherit;
                        font-size: inherit;
                        line-height: inherit;
                        color: inherit;
                    }
                }

                button {
                    background: inherit;
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;

                    width: 20%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    margin: 0;
                    padding: 0;

                    :focus {
                        outline: none;
                    }

                    svg {
                        width: 24px;
                        height: 24px;
                        color: var(--color-gray-1);
                    }
                }
            }

            .perfilInfos {
                display: flex;
                justify-content: space-between;
                width: 107px;
                gap: 4px;

                button {
                    margin: 0;
                    padding: 0;
                    border: none;
                    background: inherit;

                    :focus {
                        outline: none;
                    }

                    svg {
                        color: var(--color-gray-1);
                        width: 24px;
                        height: 24px;

                        :hover {
                            color: var(--color-gray-2);
                        }
                    }
                }
            }
        }
    }
`;
