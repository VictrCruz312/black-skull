import Global from "./styles/global";

import Footer from "./components/footer";
import Header from "./components/header";
import Section1 from "./components/sections/section1";
import Section2 from "./components/sections/section2";
import Section3 from "./components/sections/section3";
import Section4 from "./components/sections/section4";
import Section5 from "./components/sections/section5";
import Section6 from "./components/sections/section6";
import Section7 from "./components/sections/section7";
import ScrollTop from "./components/scrollTop";
import { useRef } from "react";
import { ContainerSectionsStyled } from "./styles/style";
import Section8 from "./components/sections/section8";
import Section9 from "./components/sections/section9";

const App = () => {
    const topoRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Global />
            <div className="App">
                <div ref={topoRef}></div>
                <Header />
                <ContainerSectionsStyled>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                    <Section7 />
                    <Section8 />
                    <Section9 />
                </ContainerSectionsStyled>
                <Footer />
                <ScrollTop topoRef={topoRef} />
            </div>
        </>
    );
};

export default App;
