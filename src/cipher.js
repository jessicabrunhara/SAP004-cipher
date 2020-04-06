const cipher = {
  code: function(textOriginal, deslocamentoOriginal) {
    const texto = textoOriginal.toUpperCase();
const deslocamento = parseInt(deslocamentoOriginal);

let indiceAtual = 0;
let codigos = [];
while (indiceAtual < texto.lenght) {
  const codigoDoCaractere = texto.charCodeAt (indiceAtual);
  codigos.push(codigodoCaractere);
  indiceAtual = indiceAtual + 1;
}

indiceAtual = 0;
let codigosFinais = []
while (indiceAtual < codigos.lenght) {
  const codigoDeslocado = codigos[indiceAtual] + deslocamento;
  codigosFinais.push(codigoDeslocado);
  indiceAtual = indiceAtual + 1;
}

return String.fromCharCode(...codigosFinais);

  },
decode: function(texto, deslocamento) {
  return texto;
}
  };

export default cipher;









  // ...//

