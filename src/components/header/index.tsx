import { TbTruck } from "react-icons/tb";
import { BiSearch } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import logo from "../../assets/logo.png";
import { HeaderStyled } from "./style";
import { useRef, useState } from "react";

const Header = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        setIsFocused(true);
        inputRef.current?.focus();
    };

    const disfocusInput = () => {
        setIsFocused(false);
        setInputValue("");
        inputRef.current?.blur();
    };

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
                    <input
                        onClick={() => setIsFocused(true)}
                        type="text"
                        placeholder="Buscar"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        ref={inputRef}
                    />

                    <button onClick={isFocused ? disfocusInput : focusInput}>
                        {isFocused ? <IoIosClose /> : <BiSearch />}
                    </button>
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
