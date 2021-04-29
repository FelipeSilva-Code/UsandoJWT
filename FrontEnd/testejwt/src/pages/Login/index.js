import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Card from '../../components/Card';
import FullPage from "../../components/FullPageDeslogado"
import { DivCard } from './style';
import AutenticacaoApi from "../../services/AutenticacaoApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Api = new AutenticacaoApi();

export default function Login()
{

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const history = useHistory();

    useEffect(() => {
       async function verificarToken() {
        try {
           await Api.VerificarToken();
           history.push("/menu");
        } catch (e) {
           localStorage.setItem("logado", "nao");
        }
       }
       verificarToken();
    }, [history]);

    const Logar = async () => {
       
        const req = {
                "Email": email,
                "Senha": senha
                }
        try {
      
            const resp = await Api.Logar(req);

            //Passa o token gerado para o localStorage
            localStorage.setItem("Token", "Bearer " + resp.token);
            history.push("/menu");
      
        } catch (e) {
            toast.error(e.response.data.message);
        }
    }

    const Voltar = () => {
        history.push("/home");
    }


    return(
        <>
        <ToastContainer/>
        <FullPage>
            <DivCard>
                <Card>
                    <h2>Entrar</h2>

                     <label>
                        Email:
                        <input onChange={e => setEmail(e.target.value)} type="email" required className="form form-control"></input>
                    </label>

                     <label>
                       Senha:
                        <input onChange={e => setSenha(e.target.value)} type="password" className="form form-control"></input>
                    </label>

                    <div className="divBtns">
                        <button onClick={Voltar} className="btn btn-danger">Cancelar</button>
                        <button onClick={Logar} className="btn btn-primary">Confirmar</button>
                    </div>
                </Card>
            </DivCard>
        </FullPage>
        </>
    )
}