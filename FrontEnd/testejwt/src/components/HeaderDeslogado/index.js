import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { HeaderPrincipal } from "../HeaderLogado/style";

export default function HeaderDeslogado() {
  const history = useHistory();

  const voltar = async () => {
   history.push("/");
  };


  return (
    <HeaderPrincipal>
      <h2 onClick={voltar}>JWT Teste</h2>
    </HeaderPrincipal>
  );
}
