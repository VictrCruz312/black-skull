import { Section1Styled } from "./style";
import image from "../../../assets/section1/image-1.png";

const Section1 = () => {
    return (
        <Section1Styled>
            <ul className="carrouselImage">
                <li>
                    <div>
                        <h2>
                            Ajudando você a ter <span>mais performance</span>
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna
                        </p>
                        <button>CONFIRA</button>
                    </div>
                    <img
                        className="imageAbsolute"
                        src={image}
                        alt="Homem exercitando com pesos nas mãos"
                    />
                </li>
                <div className="locationScroll">
                    <div className="line focus"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </ul>
        </Section1Styled>
    );
};

export default Section1;
