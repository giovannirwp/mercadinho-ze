import React, { Component } from "react";
import { withRouter } from "react-router";
import produtosService from "../Api/produtosService";

class ConsultaProdutos extends Component {
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

  edicaoGeral = (sku) => {
    console.log('sku para edicao', sku);
    this.props.history.push(`/cadastro-produtos/${sku}`);
  }
  
  delete = (sku) => {
    const prodDelete = this.service.deletar(sku);
    this.setState({ produtos : prodDelete });
  }

  render() {
    const { produtos } = this.state;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Fornecedor</th>
            <th scope="col">Descrição</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((prod, index) => {
            return (
              <tr key={index}>
                <th scope="row">{prod.sku}</th>
                <td>{prod.nome}</td>
                <td>{prod.preco}</td>
                <td>{prod.fornecedor}</td>
                <td>{prod.descricao}</td>
                <td>
                  <button onClick={() => this.edicaoGeral(prod.sku)} className="btn btn-primary mr-3">Editar</button>
                  <button onClick={() => this.delete(prod.sku)} className="btn btn-danger">Remover</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default withRouter(ConsultaProdutos);
