import React from "react";
import '../assets/styles/all.css';
import '../assets/styles/closebutton.css';

const CloseButton = ({onClick}) => {
    return(
        <>
        <img src={require("../assets/images/X_button.png").default} onClick={onClick} className="close" type="button" alt="닫기"></img>
        </>
    )
}

export default CloseButton;