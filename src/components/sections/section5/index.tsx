import BlockListProducts from "../../BlockListProducts";
import CardProduct from "../../cards/cardProduct";
import { Section5Styled } from "./style";

const Section5 = () => {
    let list = [];
    for (let i = 0; i < 12; i++) {
        list.push(i);
    }

    return (
        <Section5Styled>
            <BlockListProducts subtitle="Promoções">
                {list.map((_, index) => {
                    return <CardProduct key={index} type="size" />;
                })}
            </BlockListProducts>
        </Section5Styled>
    );
};

export default Section5;
