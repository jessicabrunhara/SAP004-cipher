const cipher = {
  encode: function (textoOriginal, deslocamentoOriginal) {
    const texto = textoOriginal.toUpperCase();
    const deslocamento = parseInt(deslocamentoOriginal)

    let indiceAtual = 0;
    let codigos = [];
    while (indiceAtual < texto.length) {
      const codigoDoCaractere = texto.charCodeAt(indiceAtual);
      codigos.push(codigoDoCaractere);
      indiceAtual = indiceAtual + 1;
    }

    //console.log(codigos);

    indiceAtual = 0;
    let codigosFinais = [];
    while (indiceAtual < codigos.length) {
      const codigoDeslocado = codigos[indiceAtual] + deslocamento;
      codigosFinais.push(codigoDeslocado);
      indiceAtual = indiceAtual + 1;
      //console.log(codigosFinais);
    }


    //  return String.fromCharCode(...codigosFinais);

  },
  decode: function (texto, deslocamento) {
    return texto;
  }
};

export default cipher;









  // ...//

