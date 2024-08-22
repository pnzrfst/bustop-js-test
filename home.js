


//variaveis arrecadacao
const valorPassagem = 4.40;
var totalArrecadado = 0.00;
//--


//variaveis lotacao
var capacidadeOnibus = 30;
var lotacaoAtual = 0;
var esteveVazio = 0;
var tinhaAlguemPresente = false;
var esteveLotado = 0;
var estaLotado = false;
var totalPassageiros = 0;
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
//---------
function acrescimoPassageiros(){
    if(estaLotado) return;
    
    if(lotacaoAtual < capacidadeOnibus){
        lotacaoAtual++;
        totalPassageiros++;
        
        atualizarContador();
        calcularVagasRestantes();

        totalArrecadado += valorPassagem;
        
        var atualizarTotalArrecadado = document.getElementById('valorTotalArrecadado')
        atualizarTotalArrecadado.innerText = `R$${totalArrecadado.toFixed(2)}`

    }else if(lotacaoAtual == capacidadeOnibus){
        atualizarContador();
        esteveLotado++;
    }
    
    console.log(esteveLotado)
    return totalPassageiros;

}

//-------------
function decrescimoPassageiros(){
    if(lotacaoAtual > 0){
        lotacaoAtual--;
        tinhaAlguemPresente = true;

       atualizarContador();
       calcularVagasRestantes();
    }

    if(lotacaoAtual == 0 && tinhaAlguemPresente){
        atualizarContador.innerText = `O ônibus está vazio.`;
        esteveVazio++;
        tinhaAlguemPresente = false;
    }

    console.log(esteveVazio)
}
//-------------
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
//----------

//criando estrutura do contador ao ''iniciar'' o dia.
function criarEstruturaContador(){
    const gerarEstruturaContador = `
                    <div class="infosTopo">
                            <div id="userIcons">
                                <img src="./src/assets/images/user.png" alt="simbolo usado em imagens de usuario" width="auto" height="60px">
                                <a href="#" id="setaFimDiaLink" onclick="confirmarSpanFimDia()">
                                    <img src="./src/assets/images/arrow.png" alt"seta para direita" width="auto" height="40px">
                                </a>
                            </div>
                            <section class="informacoes-veiculo-motorista">
                                    <h3 id="placaVeiculo">Placa: </h3>
                                    <p>AAABB-000</p>
                                    <h4 id="nomeMotorista"> <i>Paulo Sergio • Linha Centro-Sta.Luzia</i></h4>
                            </section>
                         
                         <span id="underline"></span>
                    </div>

                    <div class="contadorInfos">
                        <h2 id="contadorVagasRestantes"></h2>
                        <p>O total arrecadado é de: <span id="valorTotalArrecadado">R$ 0</span></p>
                        <p id="capacidadeAtual">Atualmente, não temos passageiros.</p>
                    </div>
                    <div class="contadorInfos-btn">
                        <button id="botaoAcresc" type="button" onclick="acrescimoPassageiros()">Acrescentar passageiros</button>
                        <button id="botaoDecresc" type="button" onclick="decrescimoPassageiros()">Diminuir passageiros</button>
                    </div>`
    const estruturaContador = document.querySelector('.estruturaContador');
    
    estruturaContador.innerHTML += gerarEstruturaContador;

    const inicializarContador = document.querySelector('.inicializarContador');

    if(inicializarContador){
        inicializarContador.style.display = 'none';
    }
}

document.getElementById('criarEstrutura').addEventListener('click', criarEstruturaContador);
document.getElementById('setaFimDiaLink').addEventListener('click', confirmarSpanFimDia);

//-- criando um span para confirmar com o user se é isso mesmo que ele quer.//

function confirmarSpanFimDia(){

    const gerarSpan= `
        <span class="estruturaSpanFimDia">
            <p>Deseja encerrar o processo? <br>
            <strong>Atenção!</strong>
             essa ação é irreversível.
            </p>
            <div class="span-btn">
                <button class="botaoFimDiaTrue" type="button">Confirmar</button>
                <button class="botaoFimDiaFalse" type="button">Cancelar</button>
            </div>
            
        </span>
        `

    let guardaSpanFimDia = document.querySelector('.confirmarFimDia');
    
    guardaSpanFimDia.innerHTML = gerarSpan

    fimDoDia = true; 


    const botaoFimDiaTrue = document.querySelector('.botaoFimDiaTrue');
    const botaoFimDiaFalse = document.querySelector('.botaoFimDiaFalse');

    botaoFimDiaTrue.addEventListener('click', function(){
        gerarRelatorioFimDia();
        validarFimDoDia();
    });

    botaoFimDiaFalse.addEventListener('click', validarFimDoDia);
}

function validarFimDoDia() {
    let spanFimDiaGerado = document.querySelector('.estruturaSpanFimDia');

    if (spanFimDiaGerado){
        spanFimDiaGerado.style.display = 'none'; 
    }else{
        confirmarSpanFimDia()
    }

    fimDoDia = false;
}


//---------------------------------------------------------


function gerarRelatorioFimDia(){
    const relatorioFimDia = `
        <div class="relatorioInfos">
            <table class="tabela" border="2">
                    <thead>
                            <tr>
                                <th>Ganhos totais: (em R$)</th>
                                <th>Total de passageiros: </th>
                                <th>Vezes lotado: </th>
                                <th>Vezes vazio: </th>
                            </tr>
                    </thead>       
                    
                    <tbody id="tabelaFimDia">
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                    </tbody>     
            </table>
            
        </div>`

    const relatorioFimDoDia = document.getElementById('relatorioFimDoDia');

    if(relatorioFimDoDia){
        relatorioFimDoDia.innerHTML = relatorioFimDia;
        gerarTabela();
    }
}
    
function gerarTabela(){
        const dadosTabela = {
            ganhosTotais: totalArrecadado,
            totalPassageiros: totalPassageiros,
            esteveLotado: esteveLotado,
            esteveVazio: esteveVazio
        };

        console.log(dadosTabela)
    
        const tabelaFimDia = document.getElementById('tabelaFimDia');

        if(tabelaFimDia){
            const tr = tabelaFimDia.querySelector('tr');
            
            if(tr){
                tr.children[0].textContent =  'R$' + dadosTabela.ganhosTotais.toFixed(2) 
                tr.children[1].textContent = dadosTabela.totalPassageiros
                tr.children[2].textContent = dadosTabela.esteveLotado
                tr.children[3].textContent = dadosTabela.esteveVazio
            }
        }
    
       
}

document.getElementById('setaFimDia').addEventListener('click', gerarRelatorioFimDia);



function verificarTamanhoPagina(){
    const iconeMenu = document.getElementById('iconMenu');

    if(window.innerWidth >= 768){
        iconeMenu.style.display = 'none';

    }else{
        iconeMenu.style.display = 'block'
    }
}


function mostrarMenu(){
    const listaMenuUsuario = document.getElementById('listaMenuUsuario');

    if(window.innerWidth < 768){
        if(listaMenuUsuario.style.display == 'none'){
            listaMenuUsuario.style.display = 'flex';
        }else{
            listaMenuUsuario.style.display = 'none';
        }
    }else{
        listaMenuUsuario.style.display = 'flex';
    }
    

}

