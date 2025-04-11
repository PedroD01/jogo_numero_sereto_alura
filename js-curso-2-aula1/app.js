var lista_numeros_sorteados = [];
let numero_limite = 10;
let numero_secreto = gerar_numero_aleatorio();
console.log(numero_secreto);
let tentativas = 1;

function exibir_texto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}
function exibir_texto_inicial() {
    exibir_texto('h1',"Jogo do número secreto");
    exibir_texto('p','Escolha um número entre 1 e 10')
}
exibir_texto_inicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numero_secreto){
        exibir_texto('h1',"Acertou!");
        if(tentativas == 1){
            exibir_texto('p',"Você descobriu o número secreto! com " + tentativas + " tentativa");
        }
        else{
            exibir_texto('p',"Você descobriu o número secreto! com " + tentativas + " tentativas");
        }
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numero_secreto){
            exibir_texto('p',`O número ${chute} é maior que o número secreto`);
        }
        else{
            exibir_texto('p',`O número ${chute} é menor que o número secreto`);
        }
        tentativas++;
        console.log(tentativas);
        limpar_campo();
    }
}
function gerar_numero_aleatorio() {
    let numero_escolhido = parseInt(Math.random() * numero_limite + 1);
    let quantidade_elementos = lista_numeros_sorteados.length;

    if(quantidade_elementos == numero_limite){
        lista_numeros_sorteados = [];
    }
    if (lista_numeros_sorteados.includes(numero_escolhido)){
      return gerar_numero_aleatorio();
    }
    else{
        lista_numeros_sorteados.push(numero_escolhido);
        return numero_escolhido;
    }
}
function limpar_campo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciar_jogo() {
    numero_secreto = gerar_numero_aleatorio();
    limpar_campo();
    tentativas = 1;
    exibir_texto_inicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
