import React from "react";

import {Form} from "./styles";

const InputSearch:React.FC = () => {
    return (
        <Form>
            <input placeholder='Digite o login do membro'/>
            <button type='submit'>Pesquisar</button>
        </Form>
    );
};

export default InputSearch;

