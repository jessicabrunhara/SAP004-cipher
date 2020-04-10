const cipher = {
  encode: function(deslocamentoOriginal, textoOriginal) {
    const texto = textoOriginal.toUpperCase(); //toUpperCase pega o conteúdo de textoOriginal, deixa tudo em maiúsculo e coloca na variavel criada "texto"
    const deslocamento = parseInt(deslocamentoOriginal) //parseInt tranforma o deslocamentoOriginal que era string em number e coloca na variavel "deslocamento".

    let indiceAtual = 0; //indiceatual inicial é 0.
    let codigos = []; //"[]" vai ser a array codigos com todos os caracteres que vao ser colocados.
    while(indiceAtual < texto.length) { //aqui ele roda o código enquanto o texto que a pessoa digitou for maior que indice atual. Indice atual = 0. Toda vez que a pessoa digitar mais que 0 caractere, vai rodar o código. 
      const codigoDoCaractere = texto.charCodeAt(indiceAtual); //pegando o codigo do caractere de indiceatual e coloca em codigos
      codigos.push(codigoDoCaractere); //o push coloca mais um item no final da lista de codigos. A lista de codigos estava vazia, e ele precisa ser uma lista de todos os codigos que a pessoa digitou. 
      indiceAtual = indiceAtual + 1; //mudando o valor de idice atual. era zero. agora adiciona 1. Ou seja, Primeiro ele pega o caracter indiceatual, que era 0, depois roda novamente e pega o caracter indiceatual, que é 1 (segunda letra digitada), depois roda novamente e pega o caracter indiceatual, que agora é 2 e (terceira letra digitada) e faz isso em looping enquanto os caracteres existirem. 
    } //terminamos esse while com uma lista com todos os codigos de todos os caracteres que a pessoa escreveu. 
 

    indiceAtual = 0; //zeramos o indice atual novamente 
    let codigosFinais = []; //codigosfinais é array, criamos umalista nova, a "codigosFinais", que vai guardar a versão final dos codigos
    while(indiceAtual < codigos.length) { //enquanto o indiceAtual for menor do que o array "codigos", ele roda o codigo.
      const codigoDeslocado = codigos[indiceAtual] + deslocamento; //pego o primeiro item (indiceatual = 0), somo o deslocamento, coloco na variavel codigoDeslocado
      codigosFinais.push(((codigoDeslocado -65) % 26) + 65); //com push, coloco a variavel dentro da lista codigosFinais
      indiceAtual = indiceAtual + 1; //e depois, somo +1 no indiceAtual, pra rodar novamente o codigo, e pegar a segunda letra, depois a terceira letra e assim vai...
      //na array codigosfinais, ficam tooodos os caracteres já somados, com o deslocamento. 
    }


   return String.fromCharCode(...codigosFinais); //falando pro javascript antes de mandar a lista pra função, abre a array e transforma em vários parametros separado. 
   
  },

  decode: function (deslocamentoOriginal, textoOriginal) {
    



    return texto;
  }
  
};

export default cipher;









  // ...//