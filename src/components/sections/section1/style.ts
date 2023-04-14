import styled from "styled-components";

export const Section1Styled = styled.div`
    width: 100vw;
    height: 548px;

    .carrouselImage {
        li {
            position: relative;
            width: inherit;
            height: inherit;

            div {
                position: relative;
                z-index: 10000;

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
                    width: 120px;
                    height: 48px;

                    :focus {
                        outline: none;
                    }

                    font-weight: 700;
                    font-size: 16px;
                    line-height: 20px;
                    color: var(--color-black-1);
                }
            }

            .imageAbsolute {
                width: 100vw;
                height: 548px;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
`;
