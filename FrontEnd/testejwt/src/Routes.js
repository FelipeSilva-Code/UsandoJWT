import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../src/pages/Home/index"
import Login from "./pages/Login";
import Inicio from "./pages/Inicio"
import Menu from "./pages/Menu";
import PortalDoAluno from "./pages/PortalDoAluno";
import PortalDoProfessor from "./pages/PortalDoProfessor";
import PortalLivre from "./pages/PortalLivre";

export default function Rotas() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Login" exact component={Login} />
        <Route path="/Menu" exact component={Menu} />
        <Route path="/PortalAluno" exact component={PortalDoAluno} />
        <Route path="/PortalProfessor" exact component={PortalDoProfessor} />
        <Route path="/PortalLivre" exact component={PortalLivre} />
      </Switch>
    </BrowserRouter>
  );
}
