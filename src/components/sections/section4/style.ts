import styled from "styled-components";
import backgroundImage from "../../../assets/backgroundImages/background-1.png";

export const Section4Styled = styled.div`
    height: 461px;
    min-height: 461px;
    position: relative;
    margin-bottom: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: var(--color-black-1);

    img {
        width: 100vw;
        height: 100%;
    }

    .container {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        h2 {
            padding: 40px 0 24px 15%;

            font-family: var(--font-roboto);
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

        .arrows {
            position: absolute;
            z-index: 1;
            width: 100vw;
            height: 100%;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 140px 0 140px;

            button {
                margin: 0;
                padding: 0;
                width: 32px;
                height: 32px;
                z-index: 2;
                background: var(--color-gray-2);
                border-radius: 4px;
                border: none;

                :hover {
                    background: var(--color-orange-2);
                }
                :focus {
                    outline: none;
                }
            }
        }

        .list {
            display: flex;
            gap: 20px;
            align-self: center;

            img {
                width: 277px;
                height: 294px;
            }
        }
    }

    .button {
        position: absolute;
        bottom: -24px;

        width: 139px;
        height: 48px;

        background: var(--color-orange-1);
        border-radius: 4px;
        border: none;

        font-weight: 700;
        font-size: 16px;
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
`;
