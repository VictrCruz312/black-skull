import styled from "styled-components";

export const Section1Styled = styled.div`
    width: 100vw;
    height: 548px;
    min-height: 548px;
    position: relative;

    .carrouselImage {
        position: relative;
        height: inherit;

        li {
            position: relative;
            width: inherit;
            height: inherit;

            div {
                padding-left: 11%;
                padding-top: 9%;
                position: relative;
                z-index: 100;

                h2 {
                    max-width: 548px;

                    font-family: "Roboto Condensed";
                    font-style: italic;
                    font-weight: 700;
                    font-size: 56px;
                    line-height: 66px;
                    text-transform: uppercase;
                    color: var(--color-white);

                    span {
                        color: var(--color-orange-1);
                    }
                }

                p {
                    max-width: 349px;
                    padding: 16px 0 32px 0;

                    font-weight: 400;
                    font-size: 16px;
                    line-height: 20px;
                    color: var(--color-white);
                }

                button {
                    background: var(--color-orange-1);
                    border-radius: 4px;
                    margin: 0;
                    padding: 0;
                    border: none;

                    width: 120px;
                    height: 48px;

                    :focus {
                        outline: none;
                    }

                    :hover {
                        background: var(--color-orange-2);
                    }

                    font-weight: 700;
                    font-size: 16px;
                    line-height: 20px;
                    color: var(--color-black-1);
                }
            }

            .imageAbsolute {
                width: 100vw;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
        .locationScroll {
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
        }
    }
`;
