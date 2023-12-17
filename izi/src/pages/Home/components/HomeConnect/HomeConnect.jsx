import React from 'react';
import ConnectItem from './HomeConnectItem';
import "./homeConnect.scss";
import { AiFillFacebook, AiOutlineTwitter, AiOutlineGoogle, AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const HomeConnect = () => {
    return (
        <div className="home-connect page-container">
            <h3>Connect with us!</h3>
            <div className="connections">
                <ConnectItem logo={<AiFillFacebook />} />
                <ConnectItem logo={<AiOutlineTwitter />} />
                <ConnectItem logo={<AiOutlineGoogle />} />
                <ConnectItem logo={<AiFillInstagram />} />
                <ConnectItem logo={<FaPinterestP />} />
            </div>
        </div>
    )
}

export default HomeConnect;