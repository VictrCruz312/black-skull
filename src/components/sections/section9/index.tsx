import { Section9Styled } from "./style";
import logoCircle from "../../../assets/logo_circle_white.svg";

const Section9 = () => {
    return (
        <Section9Styled>
            <h2 className="title">SOBRE A Black Skull</h2>
            <p className="description">
                A Black Skull USA é uma marca de suplementos alimentares com
                foco em atletas de alta performance. Nossa sede no Brasil está
                alocada em Embu das Artes – SP, com mais de 12.000 m² de área
                construída, com alta capacidade produtiva. Nossos produtos
                trabalham com as melhores matérias-primas do mercado e tem como
                principal característica maior concentração de insumos, que
                proporcionam níveis de pureza mais altos e por consequência
                otimizam a qualidade de nossos produtos.
            </p>
            <img className="image" src={logoCircle} alt="" />
        </Section9Styled>
    );
};

export default Section9;
