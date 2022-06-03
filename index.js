//essa função é criadora de um tipo de ação
const criarContato = (nome, taxa) => {
  //esse JSON que ela devolve é uma ação
  return {
    type: 'CRIAR_CONTATO',
    dados: {
      nome,
      taxa,
    },
  };
};
