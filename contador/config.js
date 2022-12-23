function contagem(){
  var contInput = document.getElementById('inputCont');
  var contArea = document.getElementById('contText');
  
  if(contInput.value.length == 0){
    var erro = document.getElementById('error')
    erro.innerHTML = 'Campo vázio!'

  }else {

    for(var i = 1; i <= contInput.value; i++){
      contArea.innerHTML += i + " - "
    }
  }
}

function limpar(){
  var contArea = document.getElementById('contText');
  document.getElementById('inputCont').value="";

  contArea.innerHTML = " ";
}

