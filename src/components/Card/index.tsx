import React from "react";
import {FiChevronRight} from "react-icons/fi";
import {Cards} from "./styles";

interface CardProps{
    urlImg?:string;
    login:string
    path?:string
}
const Card:React.FC<CardProps> = ({urlImg,login,path}) => {
    return (
        <>
            <Cards>
                <a href={path}>
                <img src={urlImg} alt="angular"/>
                    <div>
                        <strong>{login}</strong>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Cards>
        </>
        )
};

export default Card;

