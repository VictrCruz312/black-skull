import BlockListProducts from "../../BlockListProducts";
import CardProduct from "../../cards/cardProduct";
import { Section3Styled } from "./style";

const Section3 = () => {
    let list = [];
    for (let i = 0; i < 12; i++) {
        list.push(i);
    }
    return (
        <Section3Styled>
            <BlockListProducts subtitle="Lançamentos">
                {list.map((_, index) => {
                    return <CardProduct key={index} type="size" />;
                })}
            </BlockListProducts>
        </Section3Styled>
    );
};

export default Section3;
