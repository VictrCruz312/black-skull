import { CarrouselStyled } from "./style";
import { useRef, useState } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

interface IPropsCarrousel {
    children: React.ReactNode;
}

const Carrousel = ({ children }: IPropsCarrousel) => {
    const listRef = useRef<HTMLDivElement>(null);
    const [scrollOffset, setScrollOffset] = useState(0);

    const handleScrollLeft = () => {
        const containerWidth = listRef.current?.offsetWidth || 0;
        const newOffset = Math.max(scrollOffset - containerWidth, 0);
        setScrollOffset(newOffset);
        listRef.current?.scrollTo({
            left: newOffset,
            behavior: "smooth",
        });
    };

    const handleScrollRight = () => {
        const categoriesWidth = listRef.current?.scrollWidth || 0;
        const containerWidth = listRef.current?.offsetWidth || 0;
        const newOffset = Math.min(
            scrollOffset + containerWidth,
            categoriesWidth - containerWidth
        );
        setScrollOffset(newOffset);
        listRef.current?.scrollTo({
            left: newOffset,
            behavior: "smooth",
        });
    };
    return (
        <CarrouselStyled>
            <div className="arrows">
                <button onClick={handleScrollLeft}>
                    <HiArrowSmallLeft />
                </button>
                <button onClick={handleScrollRight}>
                    <HiArrowSmallRight />
                </button>
            </div>
            <div className="list" ref={listRef}>
                {children}
            </div>
        </CarrouselStyled>
    );
};

export default Carrousel;
