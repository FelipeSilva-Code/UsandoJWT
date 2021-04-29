import React, { useEffect} from 'react';
import { useHistory } from 'react-router';
import Botao  from '../../components/BotaoAzul';
import Card from '../../components/Card';
import FullPage from '../../components/FullPageLogado';
import AutenticacaoApi from '../../services/AutenticacaoApi';
import {DivCard} from "./style"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Api = new AutenticacaoApi();

export default function Menu()
{
    const history = useHistory();

    useEffect(() => {
      async function verificarToken() {
        try {
          await Api.VerificarToken();
          localStorage.setItem("logado", "sim");
          if (localStorage.getItem("Permissao") === "Bloqueado"){
               toast.error("Você não tem permissão para acessar essa área!");
               localStorage.setItem("Permissao", "");
          }
        } catch (e) {
            history.push("/login")
        }
      }
      verificarToken();
    }, [history]);

    return(
        <>
        <ToastContainer/>
        <FullPage>
            <DivCard>
                <Card>
                    <h2>Portal Livre</h2>

                    <p>O professor e o aluno podem acessar essa área.</p>

                    <Botao Link={"portalLivre"}><h4>Acessar</h4></Botao>
                </Card>

                 <Card>
                    <h2>Portal do Aluno</h2>

                    <p>Somente o aluno pode acessar essa área.</p>

                    <Botao Link={"portalAluno"}><h4>Acessar</h4></Botao>
                </Card>

                 <Card>
                    <h2>Portal do Professor</h2>

                    <p>Somente o professor pode acessar essa área.</p>

                    <Botao Link={"portalProfessor"}><h4>Acessar</h4></Botao>
                </Card>
            </DivCard>
        </FullPage>
        </>
    )
}