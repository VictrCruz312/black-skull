import CardCategory from "../../cards/cardCategory";
import category from "../../../assets/category/image-1.png";
import { Section2Styled } from "./style";
import Carrousel from "../../carrousels/carrousel";
import CardProduct from "../../cards/cardProduct";

const Section2 = () => {
    let list = [];
    for (let i = 0; i < 12; i++) {
        list.push(i);
    }

    return (
        <Section2Styled>
            <Carrousel>
                {list.map((_, index) => {
                    return (
                        <CardCategory
                            key={index}
                            alt="image"
                            id="1"
                            image={category}
                            title="creatina"
                        />
                    );
                })}
            </Carrousel>
        </Section2Styled>
    );
};

export default Section2;
