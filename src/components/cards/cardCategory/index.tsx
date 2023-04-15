import { useState } from "react";
import { CardCategoryStyled } from "./style";

interface IPropsCardCategory {
    image: string;
    alt: string;
    id: string;
    title: string;
}

const CardCategory = ({ image, title, alt, id }: IPropsCardCategory) => {
    const [animation, setAnimation] = useState(false);

    const startAnimation = () => {
        setAnimation(true);
    };

    const stopAnimation = () => {
        setAnimation(false);
    };

    return (
        <CardCategoryStyled>
            <div
                className="containerCircle"
                onMouseEnter={startAnimation}
                onMouseLeave={stopAnimation}
            >
                <span
                    className={`spanAnimation ${animation ? "grow" : "shrink"}`}
                ></span>
                <img className="image" src={image} alt={alt} />
            </div>
            <h3>{title}</h3>
        </CardCategoryStyled>
    );
};

export default CardCategory;
