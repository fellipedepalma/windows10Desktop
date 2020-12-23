function time(){
    hoje     = new Date();
    dia      = hoje.getDate();
    mes      = hoje.getMonth();
    ano      = hoje.getFullYear();
    hora     = hoje.getHours();
    minutos  = hoje.getMinutes();
    segundos = hoje.getSeconds();
    pegaHora = document.getElementById("hora");
    pegaData = document.getElementById("data");
    pegaData.innerHTML = dia + "/" + mes + "/" + ano;
    pegaHora.innerHTML = hora + ":" + minutos + ":" + segundos;
    setTimeout('time()', 500);
  }