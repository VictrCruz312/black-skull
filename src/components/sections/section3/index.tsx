import { LocationScrollStyled } from "../../../styles/style";
import CardProduct from "../../cards/cardProduct";
import Carrousel from "../../carrousels/carrousel";
import { Section3Styled } from "./style";

const Section3 = () => {
    let list = [];
    for (let i = 0; i < 12; i++) {
        list.push(i);
    }
    return (
        <Section3Styled>
            <h2 className="subtitle">Lançamentos</h2>
            <Carrousel>
                {list.map((_, index) => {
                    return <CardProduct key={index} type="size" />;
                })}
            </Carrousel>
            <div className="paddingLocationScroll"></div>
            <LocationScrollStyled>
                <div className="line focus"></div>
                <div className="line"></div>
                <div className="line"></div>
            </LocationScrollStyled>
        </Section3Styled>
    );
};

export default Section3;
