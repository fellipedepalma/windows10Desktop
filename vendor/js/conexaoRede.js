const rede_dom = document.querySelector(".rede");

let conexao = navigator.connection ||
              navigator.mozConnection ||
              navigator.webkitConnection;

conexao.addEventListener('change', mudaConexao);

function mudaConexao(){
    rede_dom.classList[
        conexao.rtt > 0 ? 'add' : 'remove'
    ]('conectado');

    if(conexao.rtt){
        rede_dom.textContent = " Conectado: " + conexao.effectiveType;
    }else {
        rede_dom.style.backgroundImage = "url('../vendor/assets/rede/Wlan_100_16x16.png')";
    }
}

mudaConexao();