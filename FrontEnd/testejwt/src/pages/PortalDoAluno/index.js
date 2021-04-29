import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Botao  from '../../components/BotaoAzul';
import FullPage from '../../components/FullPageLogado';
import AutenticacaoApi from '../../services/AutenticacaoApi';

const Api = new AutenticacaoApi()
export default function PortalDoAluno () 
{ 
    const [infoUsuario, setInfoUsuario] = useState(undefined);
    const history = useHistory();

    useEffect(() => {
      async function verificarToken() {
        try {
            const resp = await Api.PortalAluno();
            setInfoUsuario(resp);
          } catch (error) {
            localStorage.setItem("Permissao", "Bloqueado");
            history.push("/menu");
        }
      }
      verificarToken();
    }, [history]);

    return(
        <>
        {infoUsuario !== undefined &&
        <FullPage>
            <h2>Portal do Aluno</h2>
            <br/>
            <h3>Olá <b>{infoUsuario.nome} </b></h3>
            <h4>Você está acessando o Portal do Aluno, porque tem permissão.</h4>
            <br/>
            <Botao Link={"/menu"}><h4>Voltar</h4></Botao>
        </FullPage>
        }
        </>
    )
}