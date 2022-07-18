import React, {useEffect,useState} from "react";
import {USerInfo} from "./styles";
import {Title} from "../../styles/global";
import Card from "../../components/Card";
import {useParams} from "react-router-dom";
import api from "../../services/api";


interface Users{
    avatar_url:string;
    login:string,
    followers:string;
    public_repos:string,
    created_at:string;
}

interface Followers{
    avatar_url:string;
    login:string,
}

const MemberDetails:React.FC = () => {

    const [User,setUSer] = useState<Users  | null >(null)
    const [followers,setfollowers] = useState<Followers[] >([])
    const [error,setError] = useState('')
    let { login } : any  = useParams();


    useEffect( ()=>{
        api.get(`/users/${login}`).then((response)=>{
            setUSer(response.data)
        })
        api.get(`/users/${login}/followers`).then((response)=>{
            setfollowers(response.data)
        })
    },[])

    return (
        <>
            <USerInfo>
                <header>
                    <img src={User?.avatar_url} alt='avatar'  />
                    <div>
                        <strong>{User?.login}</strong>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>{User?.public_repos}</strong>
                        <span>Repositórios;</span>
                    </li>
                    <li>
                        <strong>{User?.followers}</strong>
                        <span>Seguidores</span>
                    </li>
                    <li>
                        <strong>{User?.created_at}</strong>
                        <span>Data de criação</span>
                    </li>
                </ul>
            </USerInfo>
            <Title>Seguidores</Title>
            {followers.map(member=>(
                <Card key={member.login} urlImg={member.avatar_url} login={member.login} path={`/users/${member.login}`}  />
            ))}
        </>
    )
};

export default MemberDetails;

