import { CardPeopleStyled } from "./style";
import { HiArrowSmallRight } from "react-icons/hi2";

interface IPropsCardPeople {
    alt: string;
    image: string;
    nome: string;
}

const CardPeople = ({ alt, image, nome }: IPropsCardPeople) => {
    return (
        <CardPeopleStyled>
            <img src={image} alt={alt} />
            <div className="containerInfos">
                <p>{nome}</p>
                <button>
                    Mais informação <HiArrowSmallRight />
                </button>
            </div>
        </CardPeopleStyled>
    );
};

export default CardPeople;
