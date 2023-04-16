import { CardObjectiveStyled } from "./style";

interface IPropsCardObjective {
    title: string;
    image: string;
}

const CardObjective = ({ image, title }: IPropsCardObjective) => {
    return (
        <CardObjectiveStyled>
            <div className="containerImage">
                <img src={image} alt="" />
            </div>
            <div className="containerTitle">
                <p className="title">{title}</p>
            </div>
            <div className="rectangles">
                <div className="rectangle rectangle1"></div>
                <div className="rectangle rectangle2"></div>
            </div>
        </CardObjectiveStyled>
    );
};

export default CardObjective;
