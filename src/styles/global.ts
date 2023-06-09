import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --font-roboto: 'Roboto Condensed', sans-serif;
    --font-barlow: 'Barlow', sans-serif;

    --color-black-1: #0B0B0B;

    --color-dark-1: #1C1C1E;
    --color-dark-2: #2C2C2E;
    --color-dark-3: #3A3A3C;
    --color-dark-3-copy: 58, 58, 60;

    --color-gray-1: #9A9A9A;
    --color-gray-2: #CACACA;

    --color-background: #F1F1F1;

    --color-white: #FFFFFF;

    --color-orange-1: #FF9601;
    --color-orange-2: #FFC470;

    --color-gradient-dark: linear-gradient(180deg, #3A3A3C 0%, #0B0B0B 101.48%);
    --color-gradient-dark-1: linear-gradient(213.8deg, #9A9A9A -17.86%, #0B0B0B 73%);
}

* {
    box-sizing: border-box;
}

/* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
*/
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
}
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    font-family: var(--font-barlow);
    background-color: var(--color-gray-8);
    line-height: 1;
    width: 100vw;
    height: 100vh;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
button{
    cursor: pointer;
}
`;
