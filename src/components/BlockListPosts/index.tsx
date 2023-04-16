import { LocationScrollStyled } from "../../styles/style";
import Carrousel from "../carrousels/carrousel";
import { BlockListPostsStyled } from "./style";

interface IPropsBlockListPosts {
    children: React.ReactNode;
    subtitle: string;
    subtitleOrange?: string;
}

const BlockListPosts = ({
    children,
    subtitle,
    subtitleOrange,
}: IPropsBlockListPosts) => {
    let list = [];
    for (let i = 0; i < 12; i++) {
        list.push(i);
    }

    return (
        <BlockListPostsStyled>
            <div className="container">
                <h2 className="subtitle">
                    {subtitle}
                    <span>{subtitleOrange}</span>
                </h2>
                <button className="buttonTodos">Ler Todos</button>
            </div>
            <Carrousel>{children}</Carrousel>
            <div className="paddingLocationScroll"></div>
        </BlockListPostsStyled>
    );
};

export default BlockListPosts;
