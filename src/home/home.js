
let contadorPassageiros = document.getElementById("contadorPassageiros");

let totalPassageiros = 0;
let valorPassagem = 4.40
let valorArrecadado = 0;

function acrescimo(){
    if (estaLotado()){
        return;
    } 

    /// incrementação de passageiros:
    totalPassageiros++; 
    contadorPassageiros.innerText = totalPassageiros;
    
    /// valor arrecadado por passageiro
    valorArrecadado += valorPassagem;

    calculoValorArrecadado();
    calculoCapacidadeTotal();
}

// diminuindo passageiros 
function decrescimo(){
    if (totalPassageiros > 0){
        totalPassageiros--;
        contadorPassageiros.innerText = totalPassageiros
        calculoCapacidadeTotal();
    } 
}

// valor arrecadado: 

function calculoValorArrecadado(){
    document.getElementById("valorTotal").innerText = `R$ ${valorArrecadado.toFixed(2)}`;
}

///// dedução da capacidade do ônibus
const capacidade = 30;

function calculoCapacidadeTotal(){
    const vagasRestantes = capacidade - totalPassageiros;
    document.getElementById("capacidadeTotal").innerText = `A capacidade total do ônibus é de 30 passageiros, e atualmente temos: ${vagasRestantes} vagas restantes`;
    return vagasRestantes;
}

// função para ver se o ônibus está lotado 

function estaLotado(){
    const vagasRestantes = calculoCapacidadeTotal();
    if (calculoCapacidadeTotal() === 0){
        document.getElementById("capacidadeTotal").innerText = `Estamos lotados.`;
        return true
    }
}





