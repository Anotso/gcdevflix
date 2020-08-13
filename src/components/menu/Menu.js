import React from 'react';
import Logo from '../assets/image/Logo.png';
import './menu.css';
import { Link } from 'react-router-dom';

import ButtonLink from '../buttonlink/ButtonLink';

function Menu(){
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="GCDevFlix - logo" />
            </Link>
            <ButtonLink classCSS="ButtonLink" addressLink="/cadastro/video">Novo vídeo</ButtonLink>
        </nav>
    );
}

export default Menu;
//PAREI EM 57min DO PRIMEIRO VÍDEO DA IMERSÃO ALURA