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

  deletar = (sku) => {
    const listagemDelete = this.service.deletar(sku);
    this.setState({ produtos: listagemDelete });
  };

  render() {
    const { produtos } = this.state;
    return (
      <div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Listagem de fornecedor</div>
        </div>
        <table className="table table-hover">
          <tr>
            <th>Id</th>
            <th>Nome do fornecedor</th>
            <th>Apagar</th>
          </tr>
          {produtos.map((prod, index) => {
            return (
              <tr>
                <td>{prod.sku}</td>
                <td>{prod.nome}</td>
                <td>
                  <button
                    onClick={() => this.deletar(prod.sku)}
                    className="btn btn-danger"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default FornecedorCad;
