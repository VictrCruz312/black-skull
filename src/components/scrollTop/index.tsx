import { ScrollTopStyled } from "./style";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillChatRightDotsFill } from "react-icons/bs";

interface IPropsScrollTop {
    topoRef: React.RefObject<HTMLDivElement>;
}

const ScrollTop = ({ topoRef }: IPropsScrollTop) => {
    return (
        <ScrollTopStyled>
            <button
                className="scrollTopButton"
                onClick={() =>
                    topoRef.current?.scrollIntoView({ behavior: "smooth" })
                }
            >
                <IoIosArrowUp />
            </button>
            <button className="chatButton">
                <BsFillChatRightDotsFill />
                Fale conosco
            </button>
        </ScrollTopStyled>
    );
};

export default ScrollTop;
