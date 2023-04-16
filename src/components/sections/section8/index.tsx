import { Section8Styled } from "./style";
import packageSVG from "../../../assets/section8/Package.svg";

const Section8 = () => {
    return (
        <Section8Styled>
            <div className="block">
                <h2 className="title">
                    Garanta o <span>frete Grátis</span>
                </h2>
                <button className="button">Consulte</button>
                <div className="containerImage">
                    <img src={packageSVG} alt="" />
                </div>
            </div>
            <div className="block">
                <h2 className="title">
                    Seu dinheiro <span>de volta</span>
                </h2>
                <button className="button">Entenda</button>
                <div className="containerImage">
                    <img src={packageSVG} alt="" />
                </div>
            </div>
        </Section8Styled>
    );
};

export default Section8;
