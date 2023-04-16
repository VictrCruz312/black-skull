import BlockListProducts from "../../BlockListProducts";
import CardProduct from "../../cards/cardProduct";
import { Section3Styled } from "./style";

const Section3 = () => {
    let list: Array<"size" | "flavor"> = [];
    for (let i = 0; i < 4; i++) {
        list.push("size");
        list.push("size");
        list.push("flavor");
        list.push("flavor");
    }
    return (
        <Section3Styled>
            <BlockListProducts subtitle="Lançamentos">
                {list.map((type, index) => {
                    return <CardProduct key={index} type={type} />;
                })}
            </BlockListProducts>
        </Section3Styled>
    );
};

export default Section3;
