import React, { useEffect } from 'react';
import FullPage from "../../components/FullPageDeslogado";
import Card from "../../components/Card";
import BotaoAzul from "../../components/BotaoAzul";
import {DivCard} from "./style";
import AutenticacaoApi from '../../services/AutenticacaoApi';
import { useHistory } from 'react-router';

const Api = new AutenticacaoApi();

export default function Home ()
{
    const history = useHistory();

    useEffect(() => {
      async function verificarToken() {
        try {
          const resp = await Api.VerificarToken();
          history.push("/menu", resp);
        } catch (e) {}
      }
      verificarToken();
    }, [history]);
    
    
    return (
        <FullPage>
            <DivCard>
                <Card>
                    <h3>Fazer Login</h3>
                        <BotaoAzul Link={"/login"}>
                            <h4>Entrar</h4>
                        </BotaoAzul>
                </Card>
            </DivCard>
        </FullPage>
    )
}