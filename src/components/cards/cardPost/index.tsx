import { CardPostStyled } from "./style";
import { BsBoxArrowUpRight } from "react-icons/bs";

interface IPropsCardPost {
    image: string;
}

const CardPost = ({ image }: IPropsCardPost) => {
    return (
        <CardPostStyled>
            <div className="containerImage">
                <img src={image} alt="" />
            </div>
            <div className="containerInfos">
                <span className="date">03.05.21</span>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                <div className="containerButton">
                    <button className="buttonMais">Ler mais</button>
                    <BsBoxArrowUpRight />
                </div>
            </div>
        </CardPostStyled>
    );
};

export default CardPost;
