
/// incrementação de passageiros:
let contPass = document.getElementById("contPass");
let contagemUsuarios = 0;
function acrescimo() {
    contagemUsuarios = contagemUsuarios + 1; 
    contPass.innerText = contagemUsuarios;
    calculoValorArrecadado();
    calculoCapacidadeTotal();
}

//// valor arrecadado a cada parada:
const valor = 4.40;

function calculoValorArrecadado(){
    let valorArrecadado = contagemUsuarios * valor;
    document.getElementById("valorArrecadado").innerText = "O total arrecadado é de: R$ " + valorArrecadado.toFixed(2);
}

///// dedução da capacidade do ônibus
const capacidade = 30

function calculoCapacidadeTotal(){
    const capacidadeT = capacidade - contagemUsuarios
    document.getElementById("capacidadeTotal").innerText = " A capacidade total do ônibus é de 30 passageiros, e atualmente temos: " + capacidadeT + " vagas restantes";
}

if (calculoCapacidadeTotal() == 30){
    document.getElementById("capacidadeTotal").innerText = "estamos lotados."
} else if (calculoCapacidadeTotal() <30 && calculoCapacidadeTotal >0){
    document.getElementById("capacidadeTotal").innerText = " A capacidade total do ônibus é de 30 passageiros, e atualmente temos: " + capacidadeT + " vagas restantes";
}