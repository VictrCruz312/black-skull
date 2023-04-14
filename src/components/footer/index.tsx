import { FooterStyled } from "./style";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import logo from "../../assets/logo.png";
import amex from "../../assets/iconsPayments/amex.svg";
import boleto from "../../assets/iconsPayments/boleto.svg";
import dinnersClub from "../../assets/iconsPayments/dinnersClub.svg";
import elo from "../../assets/iconsPayments/elo.svg";
import hipercard from "../../assets/iconsPayments/hipercard.svg";
import masterCard from "../../assets/iconsPayments/masterCard.svg";
import mercadopago from "../../assets/iconsPayments/mercadopago.svg";
import pix from "../../assets/iconsPayments/pix.svg";
import visa from "../../assets/iconsPayments/visa.svg";
import ebit from "../../assets/iconsSeguranca/ebit.svg";
import vtexPCJ from "../../assets/iconsSeguranca/vtexPCJ.svg";
import logo_vtex from "../../assets/logo_vtex.svg";
import logo_wicomm from "../../assets/logo_wicomm.svg";
import { useState } from "react";

const Footer = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ email, name });
    };

    return (
        <FooterStyled>
            <div className="containerInfos">
                <div className="links">
                    <div>
                        <div className="containerSocialMedia">
                            <img src={logo} alt="logo black skull" />
                            <p>Nos siga:</p>
                            <div>
                                <a href="http://tiktok.com">
                                    <BsFacebook />
                                </a>
                                <a href="http://tiktok.com">
                                    <BsInstagram />
                                </a>
                                <a href="http://tiktok.com">
                                    <BsYoutube />
                                </a>
                                <a href="http://tiktok.com">
                                    <BsTwitter />
                                </a>
                                <a href="http://tiktok.com">
                                    <BsTiktok />
                                </a>
                            </div>
                        </div>
                        <div className="containerLinks">
                            <h2>BLACKSKULL USA</h2>
                            <div>
                                <a href="https://google.com">Sobre Nós</a>
                                <a href="https://google.com">
                                    Black Skull é confiável?
                                </a>
                                <a href="https://google.com">
                                    Atletas Black Skull
                                </a>
                                <a href="https://google.com">Nosso Blog</a>
                                <a href="https://google.com">
                                    Seja um Revendedor
                                </a>
                                <a href="https://google.com">
                                    Entre em Contato
                                </a>
                            </div>
                        </div>
                        <div className="containerLinks">
                            <h2>INSTITUCIONAL</h2>
                            <div>
                                <a href="https://google.com">
                                    Trocas e Devoluções
                                </a>
                                <a href="https://google.com">
                                    Política de Entregas
                                </a>
                                <a href="https://google.com">
                                    Política de Privacidade
                                </a>
                                <a href="https://google.com">
                                    Política de Cancelamentos
                                </a>
                            </div>
                        </div>
                        <div className="containerLinks">
                            <h2>AFILIADOS</h2>
                            <div>
                                <a href="https://google.com">
                                    Programa de Afiliados
                                </a>
                                <a href="https://google.com">
                                    Desconto para Militares
                                </a>
                                <a href="https://google.com">
                                    Benefícios para Profissionais da Saúde
                                </a>
                                <a href="https://google.com">
                                    Benefícios para Profs. de Educação Física
                                </a>
                                <a href="https://google.com">Assinaturas</a>
                            </div>
                        </div>
                    </div>
                    <div className="containerIcons">
                        <div className="listPayments">
                            <h2>FORMAS DE PAGAMENTO</h2>
                            <div>
                                <img
                                    src={mercadopago}
                                    alt="icone mercado pago"
                                />
                                <img src={visa} alt="icone visa" />
                                <img src={masterCard} alt="icone mastercard" />
                                <img src={hipercard} alt="icone hipercard" />
                                <img src={pix} alt="icone pix" />
                                <img src={amex} alt="icone amex" />
                                <img
                                    src={dinnersClub}
                                    alt="icone dinners club"
                                />
                                <img src={elo} alt="icone elo" />
                                <img src={boleto} alt="icone boleto" />
                            </div>
                        </div>
                        <div className="listSeguranca">
                            <h2>SEGURANÇA</h2>
                            <img
                                src={vtexPCJ}
                                alt="icone VTEX e PCJ CERTIFICADO"
                            />
                            <img src={ebit} alt="icone ebit" />
                        </div>
                    </div>
                </div>
                <div className="subscription">
                    <h2>Fique por Dentro</h2>
                    <p>
                        Inscreva-se e seja o primeiro a saber sobre as
                        novidades, promoções e muito mais!
                    </p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="text"
                            placeholder="Digite seu email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <button type="submit">ENVIAR</button>
                    </form>
                </div>
            </div>
            <div className="containerDireitos">
                <p>Black Skull 2022. Todos os direitos reservados.</p>
                <div className="images">
                    <img src={logo_wicomm} alt="logo Wicomm" />
                    <img src={logo_vtex} alt="logo VTEX" />
                </div>
            </div>
        </FooterStyled>
    );
};

export default Footer;
