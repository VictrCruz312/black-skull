import styled from "styled-components";

export const CardProductStyled = styled.div`
    width: 277px;
    min-width: 277px;
    max-width: 277px;
    height: 391px;
    min-height: 381px;
    max-height: 381px;

    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    background: var(--color-white);

    :hover .container .detailsToBuy {
        display: flex;
        transform: translateY(0%);
        opacity: 1;
        z-index: 100;
    }

    :hover .container {
        background: var(--color-background);
    }

    .container {
        height: 341px;
        min-height: 341px;
        max-height: 341px;
        border: 1px solid var(--color-background);
        border-radius: 4px;

        .image {
            margin: 32px 56px 10px 56px;
            width: 165px;
            height: 165px;
        }

        .containerInfos {
            padding-left: 24px;

            .title {
                padding-top: 24px;
                width: 182px;

                font-weight: 600;
                font-size: 12px;
                line-height: 16px;
                text-transform: uppercase;
                color: var(--color-black-1);
            }

            .value {
                padding: 16px 0 4px 0;

                font-weight: 700;
                font-size: 22px;
                line-height: 26px;
                text-transform: uppercase;

                color: var(--color-orange-1);
            }

            .paymentDetails {
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                color: var(--color-dark-3);
            }
        }
        .containerButtons {
            position: absolute;
            top: 20px;
            right: 16px;

            display: flex;
            flex-direction: column;
            gap: 14px;

            button {
                margin: 0;
                padding: 0;
                border: none;
                width: 24px;
                height: 24px;

                display: flex;
                align-items: center;
                justify-content: center;

                :focus {
                    outline: none;
                }

                svg {
                    color: var(--color-gray-1);
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .detailsToBuy {
            display: flex;
            z-index: -1;
            opacity: 0;
            transform: translateY(80%);
            transition: 0.5s ease-in-out;
            position: absolute;
            flex-direction: column;
            align-items: center;
            bottom: 40px;
            width: 100%;
            height: 200px;
            border-radius: 4px;

            background: var(--color-white);

            .titleOptions {
                padding-top: 25px;
                padding-bottom: 20px;

                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                text-transform: uppercase;
                color: var(--color-dark-1);
            }

            .listSizes {
                display: flex;
                justify-content: center;
                width: 170px;
                gap: 10px;
                flex-wrap: wrap;

                li {
                    button {
                        margin: 0;
                        padding: 0;
                        width: 40px;
                        height: 32px;
                        border: 1px solid var(--color-gray-1);
                        border-radius: 4px;

                        :focus {
                            outline: none;
                        }

                        font-weight: 700;
                        font-size: 10px;
                        line-height: 20px;
                        text-align: center;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        color: var(--color-gray-1);

                        :hover {
                            color: var(--color-dark-3);
                            border: 1px solid var(--color-dark-3);
                        }
                    }

                    .sizeSelected {
                        background: var(--color-black-1);
                        color: var(--color-white);
                        border: 1px solid var(--color-black-1);

                        :hover {
                            color: var(--color-white);
                            border: 1px solid var(--color-black-1);
                        }
                    }
                }
            }

            .containerColors {
                .listColors {
                    display: flex;
                    gap: 10px;
                    padding-top: 20px;

                    li {
                        cursor: pointer;
                        width: 37px;
                        height: 37px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .containerColor {
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                        }
                    }

                    .colorSelected {
                        border: 1px solid var(--color-black-1);
                    }
                }
            }

            .listFlavor {
                display: flex;
                justify-content: center;
                width: 170px;
                gap: 10px;
                flex-wrap: wrap;

                li {
                    button {
                        margin: 0;
                        width: 80px;
                        height: 32px;
                        border: 1px solid var(--color-gray-1);
                        border-radius: 4px;

                        :focus {
                            outline: none;
                        }

                        font-weight: 700;
                        font-size: 10px;
                        line-height: 20px;
                        text-align: center;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        color: var(--color-gray-1);

                        :hover {
                            color: var(--color-dark-3);
                            border: 1px solid var(--color-dark-3);
                        }
                    }

                    .flavorSelected {
                        background: var(--color-black-1);
                        color: var(--color-white);
                        border: 1px solid var(--color-black-1);

                        :hover {
                            color: var(--color-white);
                            border: 1px solid var(--color-black-1);
                        }
                    }
                }
            }
        }
    }

    :hover .containerButtonBuy {
        opacity: 1;
    }

    .containerButtonBuy {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 100;
        transition: 0.5s ease-in-out;

        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 100%;

        button {
            width: inherit;
            margin: 0;
            padding: 10px 0;
            border: none;
            border-radius: 4px;
            background: var(--color-orange-1);

            :focus {
                outline: none;
            }
            :hover {
                background: var(--color-orange-2);
            }

            font-weight: 700;
            text-transform: uppercase;
            font-size: 16px;
            line-height: 20px;
            color: var(--color-black-1);
        }
    }
`;
