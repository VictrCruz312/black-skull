import { Section7Styled } from "./style";
import CardObjective from "../../cards/cardObjective";
import image1 from "../../../assets/section7/image1.png";
import image2 from "../../../assets/section7/image2.png";
import image3 from "../../../assets/section7/image3.png";
import image4 from "../../../assets/section7/image4.png";
import teste from "../../../assets/blogImages/exercise-2.png";

const Section7 = () => {
    return (
        <Section7Styled>
            <h2 className="titleSection">Objetivos</h2>
            <div className="containerObjetivos">
                <CardObjective image={teste} title="Ganho de Massa" />
                <CardObjective image={image2} title="Energia" />
                <CardObjective image={image3} title="Recuperação Muscular" />
                <CardObjective image={image4} title="Emagrecimento" />
            </div>
        </Section7Styled>
    );
};

export default Section7;
