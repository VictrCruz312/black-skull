import { LocationScrollStyled } from "../../styles/style";
import Carrousel from "../carrousels/carrousel";
import { BlockListProductsStyled } from "./style";

interface IPropsBlockListProducts {
    children: React.ReactNode;
    subtitle: string;
}

const BlockListProducts = ({ children, subtitle }: IPropsBlockListProducts) => {
    let list = [];
    for (let i = 0; i < 12; i++) {
        list.push(i);
    }

    return (
        <BlockListProductsStyled>
            <h2 className="subtitle">{subtitle}</h2>
            <Carrousel>{children}</Carrousel>
            <div className="paddingLocationScroll"></div>
            <LocationScrollStyled>
                <div className="line focus"></div>
                <div className="line"></div>
                <div className="line"></div>
            </LocationScrollStyled>
        </BlockListProductsStyled>
    );
};

export default BlockListProducts;
