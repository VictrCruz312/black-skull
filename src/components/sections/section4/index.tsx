import { Section4Styled } from "./style";
import backgroundImage from "../../../assets/backgroundImages/background-1.png";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import tropa1 from "../../../assets/blackSkullPeoples/Rectangle 38.png";
import tropa2 from "../../../assets/blackSkullPeoples/Rectangle 39.png";
import tropa3 from "../../../assets/blackSkullPeoples/Rectangle 40.png";
import CardPeople from "../../cards/cardPeoples";
import logoCircle from "../../../assets/logo_circle_white-transparent.svg";

const Section4 = () => {
    return (
        <Section4Styled>
            <img src={backgroundImage} alt="" />
            <div className="container">
                <h2>
                    Conheça a Tropa <span>Black Skull</span>
                </h2>
                <div className="arrows">
                    <button>
                        <HiArrowSmallLeft />
                    </button>
                    <button>
                        <HiArrowSmallRight />
                    </button>
                </div>
                <div className="list">
                    <CardPeople
                        image={tropa1}
                        alt="pessoa"
                        nome="Cedric Mcmillan"
                    />
                    <CardPeople
                        image={tropa2}
                        alt="pessoa"
                        nome="Cedric Mcmillan"
                    />
                    <CardPeople
                        image={tropa3}
                        alt="pessoa"
                        nome="Cedric Mcmillan"
                    />
                </div>
            </div>
            <button className="button">Ver todos</button>
            <img className="imageAbsolute" src={logoCircle} alt="" />
        </Section4Styled>
    );
};

export default Section4;
