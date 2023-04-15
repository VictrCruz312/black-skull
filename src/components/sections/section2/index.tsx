import CardCategory from "../../cards/cardCategory";
import category from "../../../assets/category/image-1.png";
import { Section2Styled } from "./style";
import Carrousel from "../../carrousels/carrousel";

const Section2 = () => {
    let categories = [];
    for (let i = 0; i < 12; i++) {
        categories.push(i);
    }

    return (
        <Section2Styled>
            <Carrousel>
                {categories.map((_, index) => {
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
            <h2 className="subtitle">Lançamentos</h2>
            <Carrousel>
                {categories.map((_, index) => {
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
