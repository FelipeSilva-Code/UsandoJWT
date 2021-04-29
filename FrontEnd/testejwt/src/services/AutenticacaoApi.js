import axios from 'axios';


const api = axios.create({
  baseURL: "https://localhost:5001",
});

export default class AutenticacaoApi {

    async Logar (request) {
        const resp = await api.post("/home/login", request);
        return resp.data;
    }

    async VerificarToken (){
        const resp = await api.get("/home/verificacao", { headers: {
            Authorization: localStorage.getItem("Token") 
        }});
        return resp.data;
    }

    async PortalLivre (){
        const resp = await api.get("/home/portal/livre", { headers: {
            Authorization: localStorage.getItem("Token") 
        }});
        return resp.data;
    }

     async PortalAluno (){
        const resp = await api.get("/home/portal/aluno", { headers: {
            Authorization: localStorage.getItem("Token") 
        }});
        return resp.data;
    }

     async PortalProfessor (){
        const resp = await api.get("/home/portal/professor", { headers: {
            Authorization: localStorage.getItem("Token") 
        }});
        return resp.data;
    }
}