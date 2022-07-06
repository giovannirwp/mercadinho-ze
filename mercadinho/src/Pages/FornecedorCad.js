import React, { Component } from "react";
import produtosService from "../Api/produtosService";

export class FornecedorCad extends Component {
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
      <div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Listagem de fornecedor</div>
        </div>
        <table className="table table-hover">
          <tr>
            <th>Id</th>
            <th>Nome do fornecedor</th>
          </tr>
          {this.state.produtos.map((prod, index) => {
            return (
              <tr>
                <td>{prod.sku}</td>
                <td>{prod.nome}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default FornecedorCad;
