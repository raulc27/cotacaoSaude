'use strict'

const Price = use("App/Models/Price")

class PriceController{

  async index({request,response,view}){
    const precos = await Price.all();
    return precos;
  }

  async store({request,response,view}){
    const dados = request.only([
      "operadora",
      "plano",
      "regiao",
      "00a18",
      "19a23",
      "24a28",
      "29a33",
      "34a38",
      "39a43",
      "44a48",
      "49a53",
      "54a58",
      "59a63"
    ])
  }


  /*  

  alteração de dados na tabela
  updating data at prices table

  */
  async update({params,request,response}){
    const preco = await Price.findOrFail(params.id);
    const dados = request.only([
      "operadora",
      "plano",
      "regiao",
      "00a18",
      "19a23",
      "24a28",
      "29a33",
      "34a38",
      "39a43",
      "44a48",
      "49a53",
      "54a58",
      "59a63"
    ])

    preco.merge(dados);
    await preco.save();

    return preco;
    
  }


  /*

  apagando determinado plano da tabela (rauL)

  */
  async destroy({params,request,response}){
    const plano = await Price.findOrFail(params.id);

    await plano.delete();
  }
}

module.exports = PriceController
