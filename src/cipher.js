const cipher = {
  encode: function(deslocamentoOriginal, textoOriginal) {
    const texto = textoOriginal.toUpperCase();
    const deslocamento = parseInt(deslocamentoOriginal)

    let indiceAtual = 0;
    let codigos = [];
    while(indiceAtual < texto.length) {
      const codigoDoCaractere = texto.charCodeAt(indiceAtual);
      codigos.push(codigoDoCaractere);
      indiceAtual = indiceAtual + 1;
    }

    

    indiceAtual = 0;
    let codigosFinais = [];
    while(indiceAtual < codigos.length) {
      const codigoDeslocado = codigos[indiceAtual] + deslocamento;
      codigosFinais.push(((codigoDeslocado -64) % 26) + 64);
      indiceAtual = indiceAtual + 1;
      
    }


    return String.fromCharCode(...codigosFinais);

  },
  decode: function (deslocamentoOriginal, textoOriginal) {
    return texto;
  }
};

export default cipher;









  // ...//

