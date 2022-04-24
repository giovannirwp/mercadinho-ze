import React, { Component } from "react";

const stateInitil = {
  sku: "",
  nome: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
};
export default class CadastroProdutos extends Component {
  state = stateInitil;

  handleChange = (event) => {
    const nomeCampo = event.target.name;
    this.setState({
      [nomeCampo]: event.target.value,
    });
    console.log("eiii")
  }

  render() {
    return (
      <div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Cadastro do mercadinho do Zé</div>

          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="sku">SKU</label>
                <input
                  type="text"
                  name="sku"
                  id="sku"
                  value={this.state.sku}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={this.state.nome}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="preco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  id="preco"
                  value={this.state.preco}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="Fornecedor">Fornecedor</label>
                <input
                  type="text"
                  name="fornecedor"
                  id="Fornecedor"
                  value={this.state.fornecedor}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  type="text"
                  rows="5"
                  name="descricao"
                  id="descricao"
                  value={this.state.descricao}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-12 mt-4">
                <button className="btn btn-danger">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
