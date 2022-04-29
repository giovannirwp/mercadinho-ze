import React, { Component } from "react";
import produtosService from "../Api/produtosService";

const stateInitil = {
  sku: "",
  nome: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  success: false,
};
export default class CadastroProdutos extends Component {
  state = stateInitil;

  constructor() {
    super();
    this.service = new produtosService();
  }

  handleChange = (event) => {
    const nomeCampo = event.target.name;
    this.setState({
      [nomeCampo]: event.target.value,
    });
  };

  onSubmit = (event) => {
    const dadosProduto = {
      sku: this.state.sku,
      nome: this.state.nome,
      preco: this.state.preco,
      fornecedor: this.state.fornecedor,
      descricao: this.state.descricao,
    };

    try {
      this.service.salvar(dadosProduto);
      this.clearAll();
      this.setState({ success: true})
      setTimeout(() => {
        this.setState({ success: false})
      }, 3000)
    } catch (erro) {
      const errors = erro.errors;
      this.setState({
        errors: errors,
      });
    }
  };

  clearAll = () => {
    this.setState(stateInitil);
  };

  render() {
    return (
      <div>
        <div className="card text-white bg-primary mb-3">
          <div className="card-header">Cadastro do mercadinho do Zé</div>

          <div className="card-body">
            {this.state.success && (
              <div className="alert alert-dismissible alert-info">
                <strong>Show!</strong> Cadastro realizado com sucesso!
              </div>
            )}
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
                <button
                  className="btn btn-success mr-3"
                  onClick={this.onSubmit}
                >
                  Enviar
                </button>
                <button className="btn btn-danger" onClick={this.clearAll}>
                  Limpar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
