
const login = document.getElementById('login');

const dadosUsuario = {
    usuario: "luiz",
    senha: "1234"
}; 

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_usuarios')) ?? [];
const setLocalStorage = (db_usuarios) => localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));


const cadastrarUsuario = (dadosUsuario) => {
    const db_usuarios = getLocalStorage();
    db_usuarios.push(dadosUsuario);
    setLocalStorage(db_usuarios);
}

const lerUsuarios = () => getLocalStorage();