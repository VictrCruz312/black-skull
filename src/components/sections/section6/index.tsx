import BlockListPosts from "../../BlockListPosts";
import CardPost from "../../cards/cardPost";
import { Section6Styled } from "./style";
import exercise from "../../../assets/blogImages/exercise.png";
import exercise2 from "../../../assets/blogImages/exercise-2.png";
import women from "../../../assets/blogImages/women.png";

const Section6 = () => {
    let list = [];
    for (let i = 0; i < 5; i++) {
        list.push(exercise);
        list.push(women);
        list.push(exercise2);
    }

    return (
        <Section6Styled>
            <BlockListPosts subtitle="Confira o " subtitleOrange="nosso blog">
                {list.map((image, index) => {
                    return <CardPost key={index} image={image} />;
                })}
            </BlockListPosts>
        </Section6Styled>
    );
};

export default Section6;
