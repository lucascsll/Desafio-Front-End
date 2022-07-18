import React, {useState, useEffect} from "react";
import {Title,Error} from "../../styles/global";
import Card from "../../components/Card";
import InputSearch from "../../components/InputSearch";
import api from "../../services/api";
import {useParams} from "react-router-dom";
import {MessagesError} from "../../helpers/messages.helper";

interface Members{
    avatar_url:string;
    login:string
}

const Members:React.FC = () => {
    const [Members,setMembers] = useState<Members[]>([])
    const [oldMemembers,setOldMemembers] = useState<Members[]>([])
    const [search,setSearch] = useState('')
    const [error,setError] = useState('')

    let { org } : any  = useParams();

    async function fetch():Promise<void>{

        try {
            const response = await api.get(`orgs/${org}/public_members`)
            setMembers(response.data)
            setOldMemembers(response.data)
        }catch (e) {
            setError(MessagesError.API_FAIL_MEMBER_GROUP)
        }

    }

    function filterMembers(value:string){
        setSearch(value)
        const newMembers = Members.filter(item => {
        const itemData = item.login.toUpperCase()
        const textValue = value.toUpperCase()
        return itemData.indexOf(textValue) > -1
        })
        setOldMemembers(newMembers)
    }

    useEffect( () => {
        fetch()
    },[])

    return(
        <>
            <Title>Membros</Title>;
            <InputSearch value={search} onChange={(value)=>filterMembers(value.target.value)} name='search'  />
            { oldMemembers.map(member=>(
                <Card key={member.login} urlImg={member.avatar_url} name={member.login} path={`/users/${member.login}`} isIcon={true} />
            ))}
            {error && <Error>{error}</Error> }
        </>
    )
};

export default Members;

