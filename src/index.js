
/// incrementação de passageiros:
let contPass = document.getElementById("contPass");
let contagemUsuarios = 0;

function acrescimo(){
    if (estaLotado()) return;

    contagemUsuarios = contagemUsuarios + 1; 
    contPass.innerText = contagemUsuarios;
    
    calculoValorArrecadado();
    calculoCapacidadeTotal();
}

// diminuindo passageiros 
function decrescimo(){
    if (contagemUsuarios > 0){
        contagemUsuarios = contagemUsuarios - 1;
        contPass.innerText = contagemUsuarios
        calculoCapacidadeTotal();
    } 
}

//// valor arrecadado a cada parada:
const valor = 4.40;

function calculoValorArrecadado(){
    let valorArrecadado = contagemUsuarios * valor;
    document.getElementById("valorArrecadado").innerText = "O total arrecadado é de: R$ " + valorArrecadado.toFixed(2);
}

///// dedução da capacidade do ônibus
const capacidade = 30;

function calculoCapacidadeTotal(){
    const capacidadeTotal = capacidade - contagemUsuarios;
    document.getElementById("capacidadeTotal").innerText = " A capacidade total do ônibus é de 30 passageiros, e atualmente temos: " + capacidadeTotal + " vagas restantes";
    return capacidadeTotal;
}

// função para ver se o ônibus está lotado 

function estaLotado(){
    const capacidadeTotal= calculoCapacidadeTotal();
    if (capacidadeTotal <= 0){
        document.getElementById("capacidadeTotal").innerText = "Estamos lotados.";
        return true;
    } else {
        document.getElementById("capacidadeTotal").innerText = " A capacidade total do ônibus é de 30 passageiros, e atualmente temos: " + capacidadeTotal + " vagas restantes";
        return false;
    }
}


// arrumar a calculoValorArrecadado, atrelando ela a x que acrescentamos usuarios, sem limite de vezes;
// arrumar 0 vagas restantes;





