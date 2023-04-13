import { TbTruck } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import { HeaderStyled } from "./style";

const Header = () => {
    return (
        <HeaderStyled>
            <div className="containerInfos">
                <a href="https://google.com">FALE CONOSCO</a>
                <div className="noticias">
                    <TbTruck />
                    <p>Frete grátis a partir de R$ 199,90 para todo Brasil</p>
                </div>
                <a href="https://google.com">BLOG.BLACKSKULL</a>
            </div>
            <div className="containerUtils">
                <div className="logo">
                    <img src={logo} alt="logo black skull" />
                </div>
                <div className="navigation">
                    <a href="">CATEGORIAS</a>
                    <a href="">VESTUARIO</a>
                    <a href="">OBJETIVOS</a>
                    <a href="">PROMOÇÕES</a>
                    <a href="">ATLETAS</a>
                    <a href="">ASSINATURA</a>
                </div>
                <div className="search">
                    <div className="containerSearch">
                        <input type="text" placeholder="Buscar" />
                        <button>
                            <BiSearch />
                            {/* <IoIosClose /> */}
                        </button>
                    </div>
                </div>
                <div className="perfilInfos">
                    <button>
                        <BiUserCircle />
                    </button>
                    <button>
                        <BiStar />
                    </button>
                    <button>
                        <HiOutlineShoppingCart />
                    </button>
                </div>
            </div>
        </HeaderStyled>
    );
};

export default Header;
