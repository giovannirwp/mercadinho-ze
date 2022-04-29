import React, { Component } from "react";
import produtosService from "../Api/produtosService";

export default class ConsultaProdutos extends Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new produtosService();
  }

  componentDidMount() {
    const produtos = this.service.listagemDeProdutos();
    this.setState({ produtos: produtos });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Fornecedor</th>
            <th scope="col">Descrição</th>
          </tr>
        </thead>
        <tbody>
          {this.state.produtos.map((prod, index) => {
            return (
              <tr key={index}>
                <th scope="row">{prod.sku}</th>
                <td>{prod.nome}</td>
                <td>{prod.preco}</td>
                <td>{prod.fornecedor}</td>
                <td>{prod.descricao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
