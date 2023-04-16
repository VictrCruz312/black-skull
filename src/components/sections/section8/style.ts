import styled from "styled-components";

export const Section8Styled = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;

    width: 100vw;

    padding-bottom: 160px;

    .block {
        width: 475px;
        height: 280px;
        padding: 40px 20px 20px 40px;
        position: relative;

        background: var(--color-gradient-dark-1);

        :hover .containerImage img {
            transform: rotate(70deg);
        }

        .title {
            width: 229px;
            padding-bottom: 24px;

            font-family: "Roboto Condensed";
            font-style: italic;
            font-weight: 700;
            font-size: 40px;
            line-height: 47px;
            text-transform: uppercase;
            color: var(--color-white);

            span {
                color: var(--color-orange-1);
            }
        }

        .button {
            background: var(--color-orange-1);
            border-radius: 4px;
            border: none;
            margin: 0;
            padding: 0;
            width: 123px;
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

        .containerImage {
            position: absolute;
            bottom: 20px;
            right: 20px;

            img {
                transition: transform 0.2s ease-in-out;
                width: 180px;
                height: 180px;
            }
        }
    }
`;
