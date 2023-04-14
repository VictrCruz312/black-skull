import styled from "styled-components";

export const FooterStyled = styled.div`
    width: 100vw;
    min-height: 588px;

    display: flex;
    flex-direction: column;

    background: var(--color-black-1);

    .containerInfos {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid var(--color-dark-3);

        .links {
            display: flex;
            flex-direction: column;
            padding: 0 56px 0 56px;

            .section {
                display: flex;
                justify-content: space-between;
                gap: 62px;

                .blockSocialMedia {
                    padding-top: 56px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 20%;

                    img {
                        width: 100%;
                    }

                    p {
                        padding: 58px 0 16px 0;

                        font-weight: 400;
                        font-size: 14px;
                        line-height: 17px;
                        text-align: center;
                        color: var(--color-white);
                    }

                    div {
                        display: flex;
                        gap: 20px;

                        a {
                            width: 24px;
                            height: 24px;
                            border-radius: 50px;

                            display: flex;
                            justify-content: center;
                            align-items: center;

                            background: var(--color-white);

                            svg {
                                color: var(--color-black-1);
                            }
                        }
                    }
                }

                .blockLinks {
                    padding-top: 56px;
                    padding-bottom: 82px;
                    width: 60%;
                    min-width: 572px;
                    display: flex;
                    justify-content: space-between;
                    gap: 45px;
                    flex-wrap: wrap;

                    font-weight: 700;
                    font-size: 16px;
                    line-height: 19px;
                    text-transform: uppercase;
                    color: var(--color-white);

                    .containerLinks {
                        width: 160px;

                        div {
                            padding-top: 20px;
                            display: flex;
                            flex-direction: column;
                            gap: 14px;

                            a {
                                font-weight: 400;
                                font-size: 14px;
                                line-height: 17px;
                                text-transform: none;
                                color: var(--color-gray-1);
                            }
                        }
                    }

                    .containerIcons {
                        flex-basis: 100%;
                        display: flex;
                        gap: 48px;

                        padding-top: 45px;

                        .list {
                            h2 {
                                padding-bottom: 24px;
                            }
                            div {
                                width: 202px;

                                display: flex;
                                flex-wrap: wrap;
                                gap: 8px;
                            }
                        }
                    }
                }
                .blockSubscription {
                    width: 20%;
                    padding: 64px 0 0 44px;

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    border-left: 1px solid var(--color-dark-3);

                    h2 {
                        width: 150px;
                        padding-bottom: 16px;

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
                }

                p {
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 17px;
                    text-align: center;
                    color: var(--color-gray-1);
                }

                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;

                    padding-top: 32px;

                    input {
                        background: var(--color-dark-1);

                        border: 1px solid var(--color-dark-3);
                        border-radius: 4px;
                        padding: 0 16px;
                        width: 266px;
                        height: 56px;

                        font-family: var(--font-barlow);
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 14px;
                        color: var(--color-gray-1);

                        :hover {
                            background: var(--color-dark-2);
                        }

                        ::placeholder {
                            font-family: var(--font-barlow);
                            font-weight: 500;
                            font-size: 12px;
                            line-height: 14px;
                            color: var(--color-gray-1);
                        }
                    }

                    button {
                        margin-top: 8px;
                        width: 138px;
                        height: 40px;
                        border: none;

                        background-color: var(--color-orange-1);

                        font-weight: 700;
                        font-size: 14px;
                        line-height: 20px;
                        text-align: center;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        color: var(--color-black-1);

                        :hover {
                            background: var(--color-orange-2);
                        }
                    }
                }
            }
        }
    }

    .containerDireitos {
        display: flex;
        justify-content: space-between;
        padding: 0 56px;
        align-items: center;
        height: 88px;

        p {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            color: var(--color-white);
        }

        div {
            display: flex;
            gap: 40px;
        }
    }
`;
