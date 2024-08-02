
//variaveis arrecadacao
const valorPassagem = 4.40;
var totalArrecadado = 0.00;
//--


//variaveis lotacao
var capacidadeOnibus = 30;
var lotacaoAtual = 0;
var esteveVazio = 0;
var esteveLotado = 0;
var fimDoDia = false;
var estaLotado = false;
//-- 



function atualizarContador(){
    var atualizarContador = document.getElementById('capacidadeAtual');
    if(estaLotado == true){
      atualizarContador.innerText = `Estamos lotados.`
    }
    if(lotacaoAtual == 1){
        atualizarContador.innerText = `Lotação atual: ${lotacaoAtual} passageiro.`;
    }else if(lotacaoAtual > 0){
        atualizarContador.innerText = `Lotação atual: ${lotacaoAtual} passageiros.`;
    }else if(lotacaoAtual == 0){
        atualizarContador.innerText = `O ônibus está vazio.`
    }else{
        atualizarContador.innerText = `Estamos lotados.`
    }
}


function acrescimoPassageiros(){
    if(estaLotado) return;
    
    if(lotacaoAtual < capacidadeOnibus){
        lotacaoAtual++;
        
        atualizarContador();
        calcularVagasRestantes();

        totalArrecadado += valorPassagem;
        
        var atualizarTotalArrecadado = document.getElementById('valorTotalArrecadado')
        atualizarTotalArrecadado.innerText = `R$${totalArrecadado.toFixed(2)}`

    }else if(lotacaoAtual == capacidadeOnibus){
        atualizarContador();
        esteveLotado++;
    }
    
}

//-------------

function decrescimoPassageiros(){
    if(lotacaoAtual > 0){
        lotacaoAtual--;

       atualizarContador();
       calcularVagasRestantes();
    }

    if(lotacaoAtual == 0){
        atualizarContador.innerText = `O ônibus está vazio.`;
        esteveVazio++;
    }
}

function calcularVagasRestantes(){
    var vagasRestantes = capacidadeOnibus - lotacaoAtual;

    var atualizarVagas = document.getElementById('contadorVagasRestantes');
    if(vagasRestantes > 0){
        if(vagasRestantes == 1){
            atualizarVagas.innerText = `Vagas restantes:\n${vagasRestantes} vaga`;
        }else if(vagasRestantes == capacidadeOnibus){
            atualizarVagas.innerText = `Todos os assentos disponíveis.`;
        }else{
            atualizarVagas.innerText = `Vagas restantes:\n${vagasRestantes} vagas`;
        }

    }else{
        atualizarVagas.innerText = "Estamos lotados."
    }
    
    
}