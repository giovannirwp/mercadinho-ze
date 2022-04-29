import React, { Component } from 'react'

const CHAVEPROD = '_CHAVEPROD';


export function ErroValidacao(erros) {
  this.errors = erros;
}
export default class produtosService extends Component {
  
  validaCampos = (produto) => {
    const errors = [];
   
    if(!produto.sku) {
      errors.push('O campo Sku é Obrigatório');
    }

    if(!produto.nome) {
      errors.push('O campo nome é Obrigatório');
    }

    if(!produto.preco || produto.preco <= 0) {
      errors.push('O campo nome é Obrigatório deve ter o valor maior que zero');
    }

    if(!produto.fornecedor) {
      errors.push('O campo fornecedor é Obrigatório');
    }

    if(errors.length > 0){
      throw new ErroValidacao(errors);
    }

  }

  salvar = (produto) => {
    this.validaCampos(produto);
    
    let produtosAll = localStorage.getItem(CHAVEPROD);

    if(!produtosAll) {
      produtosAll = [];
    } else {
      produtosAll = JSON.parse(produtosAll);
    }

    produtosAll.push(produto);

    localStorage.setItem(CHAVEPROD, JSON.stringify(produtosAll));
  }
}
