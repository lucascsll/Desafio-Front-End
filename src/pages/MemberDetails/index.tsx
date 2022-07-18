import React from "react";
import {USerInfo} from "./styles";
import Card from "../../components/Card";

const MemberDetails:React.FC = () => {
    return (
        <>
            <USerInfo>
                <header>
                    <img src='https://avatars.githubusercontent.com/u/49589251?v=4' alt='avatar'  />
                    <div>
                        <strong>Lucas Cordeiro</strong>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>180</strong>
                        <span>Repositórios;</span>
                    </li>
                    <li>
                        <strong>180</strong>
                        <span>Seguidores</span>
                    </li>
                    <li>
                        <strong>27/09/1996</strong>
                        <span>Data de criação</span>
                    </li>
                </ul>
            </USerInfo>;
            <Card login='users' />
            <Card login='users' />
            <Card login='users' />
            <Card login='users' />
            <Card login='users' />
        </>
    )
};

export default MemberDetails;

