import React from "react";
import {FiChevronRight} from "react-icons/fi";
import {Cards} from "./styles";

const Card:React.FC = () => {
    return (
        <>
            <Cards>
                <a href="angular">
                <img src="https://avatars.githubusercontent.com/u/139426?s=200&v=4" alt="angular"/>
                    <div>
                        <strong>Angular</strong>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Cards>
        </>

        )


};

export default Card;

