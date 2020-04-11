function code(deslocamento, texto) {

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
    let codigoLocal = codigoDeslocado - 65;

    while(codigoLocal < 0) {
      codigoLocal = codigoLocal + 26;
    }

    codigosFinais.push((codigoLocal % 26) + 65);
    indiceAtual = indiceAtual + 1;
    
  }

  return String.fromCharCode(...codigosFinais);
}

const cipher = {
  encode: function(deslocamentoOriginal, textoOriginal) {
    const texto = textoOriginal.toUpperCase(); 
    const deslocamento = parseInt(deslocamentoOriginal);
    return code(deslocamento, texto);
  },

  decode: function(deslocamentoOriginal, textoOriginal) {
    const texto = textoOriginal.toUpperCase();
    const deslocamento = parseInt(deslocamentoOriginal);
    return code(-deslocamento, texto);
  }

};

export default cipher;
