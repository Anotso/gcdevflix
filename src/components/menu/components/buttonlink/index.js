import React from 'react'

function ButtonLink(props){
    return(
        <a className={props.classCSS} href={props.addressLink}>{props.text}</a>
    );
}

export default ButtonLink;