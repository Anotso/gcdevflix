import React from 'react';
import Logo from '../assets/image/Logo.png';
import './menu.css';
import ButtonLink from './components/buttonlink';

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="GCDevFlix - logo" />
            </a>
            <ButtonLink classCSS="ButtonLink" addressLink="/" text="Novo vídeo"/>
        </nav>
    );
}

export default Menu;
//PAREI EM 57min DO PRIMEIRO VÍDEO DA IMERSÃO ALURA