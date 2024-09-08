
// procura o db no navegador, senao cria um array vazio.
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_usuarios')) ?? [];
// envia para o navegador o array com as infos dos usuarios.
const setLocalStorage = (db_usuarios) => localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

const dadosUsuario = {
    usuario: document.getElementById('usuario').value,
    senha: document.getElementById('senha').value
}; 

const cadastrarUsuario = (dadosUsuario) => {
    // pega o array ou o db ja existente
    const db_usuarios = getLocalStorage();
    // pusha o array com os dados do usuario (ja formatado para JSON).
    db_usuarios.push(dadosUsuario);
    //envia o array para o db criado no navegador
    setLocalStorage(db_usuarios);
}

const lerUsuarios = () => getLocalStorage();

const atualizarUsuario = (index, dadosUsuario) => {
    const db_usuarios = lerUsuarios()
    db_usuarios[index] = dadosUsuario;
    setLocalStorage(db_usuarios);    
}

const apagarUsuario = (index) =>{
    const db_usuarios = lerUsuarios()
    db_usuarios.splice(index, 1);
    setLocalStorage(db_usuarios);
}


//------------------------------
const camposValidos = () => {
    return document.getElementById('formularioDeCadastro').reportValidity()
}

const verificarCadastro = (dadosUsuario) =>{
    const usuariosNoBanco = getLocalStorage();
    for(var i = 0; i < usuariosNoBanco.length; i++){
        if(dadosUsuario.usuario === usuariosNoBanco[i].usuario){
            window.alert("usuario já cadastrado, verifique as informações!")
            return true
        }

        window.alert("usuario cadastrado com sucesso!")
        return false
    }
}


const salvarNoBanco = () =>{
    if(camposValidos()){
        const dadosUsuario = {
            usuario: document.getElementById('usuario').value,
            senha: document.getElementById('senha').value
        }; 
        
        
        if(!verificarCadastro(dadosUsuario)){
            cadastrarUsuario(dadosUsuario);
            window.alert("usuario cadastrado com sucesso!")
        }

    }
}

document.getElementById('btn-login').addEventListener('click', () => {
    salvarNoBanco();
})
