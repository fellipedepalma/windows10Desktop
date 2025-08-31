function time(){
    const hoje = new Date();
    
    const dia = hoje.getDate();
    const mes = hoje.getMonth() + 1; 
    const ano = hoje.getFullYear()
    
    const hora = String(hoje.getHours()).padStart(2, '0');
    const minutos = String(hoje.getMinutes()).padStart(2, '0');
    const segundos = String(hoje.getSeconds()).padStart(2, '0');

    const pegaHora = document.getElementById("hora");
    const pegaData = document.getElementById("data");

    pegaData.innerHTML = `${dia}/${mes}/${ano}`;
    pegaHora.innerHTML = `${hora}:${minutos}:${segundos}`;

    setTimeout(time, 500);
  }

  time();