import styled from "styled-components";

export const CardCategoryStyled = styled.div`
    width: 178px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;
    z-index: 1;

    .containerCircle {
        width: 178px;
        height: 178px;
        border-radius: 50%;

        position: relative;

        background-color: var(--color-background);

        :hover .spanAnimation {
            animation-name: grow;
            animation-duration: 0.4s;
            animation-fill-mode: forwards;
        }

        :hover .image {
            width: 164px;
            height: 164px;
            transition: 0.4s;
        }

        .spanAnimation {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;

            background-color: var(--color-orange-1);
            border: 5px solid var(--color-orange-2);

            transform: translate(-50%, -50%);
            animation-name: shrink;
            animation-duration: 0.4s;
            animation-fill-mode: forwards;
            z-index: 1;

            @keyframes grow {
                0% {
                    width: 0;
                    height: 0;
                    background-color: var(--color-orange-1);
                }

                100% {
                    width: 100%;
                    height: 100%;
                    background-color: var(--color-orange-1);
                }
            }

            @keyframes shrink {
                0% {
                    width: 100%;
                    height: 100%;
                }
                100% {
                    width: 0;
                    height: 0;
                }
            }
        }
        .image {
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 108px;
            height: 108px;
            transition: 0.4s;
        }
    }

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;

        text-align: center;
        text-transform: uppercase;
        color: var(--color-dark-1);
    }
`;
