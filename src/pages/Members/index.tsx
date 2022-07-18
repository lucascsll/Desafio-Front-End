import React, {useState, useEffect} from "react";
import {Title,Error} from "../../styles/global";
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
    const [search,setSearch] = useState('')
    const [error,setError] = useState('')

    let { org } : any  = useParams();

    async function fetch():Promise<void>{

        try {
            const response = await api.get(`orgs/${org}/public_members`)
            setMembers(response.data)
        }catch (e) {
            setError('Falha ao buscar membros do grupo !')
        }

    }

    function filterMembers(value:string){

        setSearch(value)
        const newMembers = Members.filter(item => {
        const itemData = item.login.toUpperCase()
        const textValue = value.toUpperCase()
        return itemData.indexOf(textValue) > -1
        })
        setMembers(newMembers)

    }

    useEffect( ()=>{
        fetch()
    },[])

    return(
        <>
            <Title>Members</Title>;
            <InputSearch value={search} onChange={(value)=>filterMembers(value.target.value)} name='search'  />
            {Members.map(member=>(
                <Card key={member.login} urlImg={member.avatar_url} login={member.login} path='/lucas'  />
            ))}

            {error && <Error>{error}</Error> }
        </>
    )
};

export default Members;

