import styled from "styled-components";

export const CardObjectiveStyled = styled.div`
    width: 277px;
    height: 340px;
    position: relative;
    transition: 0.4s ease-in-out;

    :hover .containerImage img {
        width: 110%;
        height: 110%;
        filter: grayscale(0);
    }

    .containerImage {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        overflow: hidden;

        position: relative;
        z-index: 1;

        img {
            position: absolute;
            top: 0;

            width: 100%;
            height: 100%;

            transition: 0.2s ease-in-out;
            filter: grayscale(1);
        }
    }

    :hover .containerTitle {
        background: var(--color-orange-2);
    }

    .containerTitle {
        position: absolute;
        bottom: 0;
        z-index: 2;

        background: var(--color-orange-1);
        width: 212px;
        height: 40px;
        clip-path: polygon(0 0, 100% 0, 100% 0%, 88% 100%, 0 100%);

        .title {
            padding: 12px 16px;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            text-transform: uppercase;

            color: var(--color-black-1);
        }
    }

    :hover .rectangles .rectangle1 {
        transform: translateX(80%) skew(-33deg);
    }
    :hover .rectangles .rectangle2 {
        transform: translateX(160%) skew(-33deg);
    }

    .rectangles {
        position: absolute;
        right: 65px;
        bottom: 0;
        z-index: 3;

        display: flex;

        .rectangle {
            background: var(--color-orange-1);
            height: 39px;
            transform-origin: bottom right;
            position: relative;
        }

        .rectangle1 {
            transform: translateX(-120%) skew(-33deg);
            transition: 0.2s ease-in-out;
            width: 13px;
            padding-right: 10px;
        }

        .rectangle2 {
            transform: translateX(-260%) skew(-33deg);
            transition: 0.2s ease-in-out;
            width: 10px;
            padding-right: 10px;
        }
    }
`;
