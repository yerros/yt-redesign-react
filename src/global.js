import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* css reset */
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
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
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
hr {
    border: none;
    margin-bottom: 50px
}
/* enf */

body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textPrimary};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
    transition: all 0.25s linear;
    box-sizing: border-box
}
button:focus, .btn:focus {
    box-shadow: none !important;
    outline:0;
}
.wrapper {
    display:flex;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: calc(100vh - 69px);
}
.main {
    display: block
}
.menu-img {
    padding: 20px;
}

.navigation {
    width: 20%;
}

.toogled {
    width: 5% !important;
    font-size: 0
}
.navigation-list li {
    list-style: none;
    margin: 20px 0 10px 20px;
}
.navigation-list span, button {
    vertical-align: middle;
    margin-right: 15px;
    color: ${({ theme }) => theme.textSecondary};
    
}
.header {
    display: flex;
    align-items: center;
}
.logo {
    width: 166px;
    height: 25px
}
.header-right {
    display: flex;
    width: 100%
}
.header-account {
    display: flex;
    margin-left: auto;
    align-items: center
}
.header-account span {
    color: ${({ theme }) => theme.textSecondary};
}
.button {
    border-radius: 20px;
    padding: 5px 20px ;
    background-color: #FF0000;
    border: none
}
.search {
    display:flex;
    align-items: center
}
.search input {
    border: none;
    background-color: ${({ theme }) => theme.inputbBg} !important;
    border-radius: 20px;
    width: 530px;
    height: 30px
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    padding: 15px;
}
.search-icon {
    margin-left: -30px;
    color: ${({ theme }) => theme.textSecondary};
}
#mobile-nav {
    display: none
}
/* Responsive */
@media (max-width: 992px) and (max-width: 1199.98px) { 
    .navigation {
   display: none
}
    .navigation-list {
    max-width: 10px;
    font-size: 0
}
.toogled {
    width: 20% !important;
    font-size: 16px !important;
}
.header-right {
    display: none;
}
#mobile-nav {
    display: flex;
}
}
`;
