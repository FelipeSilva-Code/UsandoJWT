import React from "react";
import { useHistory } from "react-router";
import { HeaderPrincipal } from "./style";

export default function HeaderLogado() {
  const history = useHistory();
 
  const voltar = async () => {
      history.push("/menu");
  };

  const retirarToken = () => {
    localStorage.setItem("Token", "Bearer ");
    localStorage.setItem("Permissao", "");
    history.push("/login");
  };

  return (
    <HeaderPrincipal>
      <h2 onClick={voltar}>JWT Teste</h2>
      <h4 onClick={retirarToken}>Sair</h4>
    </HeaderPrincipal>
  );
}
