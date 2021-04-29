import React, { useEffect, useState } from "react";
import FullPage from "../../components/FullPageDeslogado";
import Botao from "../../components/BotaoAzul";
import AutenticacaoApi from "../../services/AutenticacaoApi";
import { useHistory } from "react-router";

const Api = new AutenticacaoApi();
export default function Inicio() {

  const [show, setShow] = useState(false);  
  const history = useHistory();

  useEffect(() => {
    async function verificarToken() {
      try {
        const resp = await Api.VerificarToken();
        history.push("/menu", resp);
      } catch (e) {
        setShow(true);
      }
    }
    verificarToken();
  }, [history, show]);

  return (
    <>
    { show === true &&
    <FullPage>
      <h3>
        Olá Mundo.
        <br />
        Este é um pequeno projeto teste. Nele eu faço o uso do JWT para a
        autenticação de usuários.
      </h3>

      <Botao Link={"/Home"}>
          <h4>Começar</h4>
      </Botao>

    </FullPage>
    }
    </>
  );
}
