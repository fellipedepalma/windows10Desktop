const rede_dom = document.querySelector(".rede");

let conexao = navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection;

conexao.addEventListener('change', mudaConexao);

function mudaConexao() {
    const isConnected = conexao.rtt > 0;

    rede_dom.classList.toggle('conectado', isConnected);

    if (isConnected) {
        // rede_dom.textContent = " Conectado: " + conexao.effectiveType;
        // Talvez redefinir a imagem de fundo para o ícone de 'conectado' se ela foi alterada
        rede_dom.style.backgroundImage = "url('../vendor/assets/rede/rede_conectado.ico')";
    } else {
        // rede_dom.textContent = " Desconectado";
        // Alterar para um ícone de 'desconectado'
        rede_dom.style.backgroundImage = "url('../vendor/assets/rede/rede_sem_conexao.ico')";
    }
}

mudaConexao();

