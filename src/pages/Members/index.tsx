import React,{useState,useEffect} from "react";
import {Title} from "../../styles/global";
import Card from "../../components/Card";
import InputSearch from "../../components/InputSearch";
import api from "../../services/api";
import {useParams} from "react-router-dom";

interface Members{
    avatar_url:string;
    login:string
}

const Members:React.FC = () => {
    const [Members,setMembers] = useState<Members[]>([])
    let { org } : any  = useParams();

    async function fetch():Promise<void>{
        const response = await api.get(`orgs/${org}/public_members`)

        setMembers(response.data)
    }

    useEffect( ()=>{
        fetch()
    },[])
    return(
        <>
            <Title>Members</Title>;
            <InputSearch/>
            {Members.map(member=>(
                <Card urlImg={member.avatar_url} login={member.login} />
            ))}
        </>
    )
};

export default Members;

