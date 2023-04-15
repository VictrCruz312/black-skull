import { CardProductStyled } from "./style";
import image from "../../../assets/product/image-1.png";
import { BiStar } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useState } from "react";

interface IPropsCardProduct {
    type: "size" | "flavor";
}

const CardProduct = ({ type }: IPropsCardProduct) => {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedFlavor, setSelectedFlavor] = useState("");

    const sizes = ["P", "M", "G", "GG", "EXGG2", "EXGG3"];
    const flavors = ["Morango", "Chocolate", "Baunilha", "Caramelo"];
    const colors = ["#000000", "#a80707", "#00a236", "#5d00e8"];

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
    };

    const handleFlavorClick = (flavor: string) => {
        setSelectedFlavor(flavor);
    };

    return (
        <CardProductStyled>
            <div className="container">
                <img className="image" src={image} alt="text" />

                <div className="containerInfos">
                    <p className="title">
                        Whey Zero (Com Lactase) Black Skull - 900G
                    </p>
                    <p className="value">R$ 349,90</p>
                    <span className="paymentDetails">ou 12x de R$ 29,16</span>
                </div>
                <div className="containerButtons">
                    <button>
                        <BiStar />
                    </button>
                    <button>
                        <HiOutlineShoppingCart />
                    </button>
                </div>
                <div className="detailsToBuy">
                    {type === "size" && (
                        <>
                            <h4 className="titleOptions">Tamanho</h4>
                            <ul className="listSizes">
                                {sizes.map((size, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() =>
                                                handleSizeClick(size)
                                            }
                                            className={
                                                selectedSize === size
                                                    ? "sizeSelected"
                                                    : ""
                                            }
                                        >
                                            {size}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="containerColors">
                                <ul className="listColors">
                                    {colors.map((color, index) => (
                                        <li
                                            key={index}
                                            onClick={() =>
                                                handleColorClick(color)
                                            }
                                            className={
                                                selectedColor === color
                                                    ? "colorSelected"
                                                    : ""
                                            }
                                        >
                                            <div
                                                className="containerColor"
                                                style={{ background: color }}
                                            ></div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                    {type === "flavor" && (
                        <>
                            <h4 className="titleOptions">Sabor</h4>
                            <ul className="listFlavor">
                                {flavors.map((flavor) => (
                                    <li
                                        key={flavor}
                                        onClick={() =>
                                            handleFlavorClick(flavor)
                                        }
                                    >
                                        <button
                                            className={
                                                selectedFlavor === flavor
                                                    ? "flavorSelected"
                                                    : ""
                                            }
                                        >
                                            {flavor}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                </div>
            </div>
            <div className="containerButtonBuy">
                <button>Comprar</button>
            </div>
        </CardProductStyled>
    );
};

export default CardProduct;
