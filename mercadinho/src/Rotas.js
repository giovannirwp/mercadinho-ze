import React from "react";
import { Route, Switch } from "react-router";
import CadastroProdutos from "./Pages/CadastroProdutos";
import ConsultaProdutos from "./Pages/ConsultaProdutos";
import FornecedorCad from "./Pages/FornecedorCad";
import Home from "./Pages/Home";

export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/cadastro-produtos/:sku?" component={CadastroProdutos} />
      <Route exact path="/consulta-produtos" component={ConsultaProdutos} />
      <Route exact path="/cadastro-fornecedor" component={FornecedorCad} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}
