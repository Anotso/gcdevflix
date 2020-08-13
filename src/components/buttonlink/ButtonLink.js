import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(props){
    return(
        <Link className={props.classCSS} to={props.addressLink}>{props.children}</Link>
    );
}

export default ButtonLink;