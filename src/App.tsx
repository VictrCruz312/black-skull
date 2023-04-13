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

const App = () => {
    return (
        <>
            <Global />
            <div className="App">
                <Header />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Footer />
            </div>
        </>
    );
};

export default App;
