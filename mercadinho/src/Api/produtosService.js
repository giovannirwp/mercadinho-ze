import React, { Component } from 'react'

const CHAVEPROD = '_CHAVEPROD';

export default class produtosService extends Component {
  salvar = (produto) => {

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
