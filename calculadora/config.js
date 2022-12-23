function numsCalc(num) {
  var campo = document.getElementById('digNum').value
  var num2 = campo + num
  document.getElementById('digNum').value = num2
}

function limpar() {
  document.getElementById('digNum').value = " ";
}

function voltar(){
  var campo = document.getElementById('digNum').value

  document.getElementById('digNum').value = campo.substring(0, campo.length -1)
}

function res(){
  var campo = document.getElementById('digNum').value

  if(campo) {
    document.getElementById('digNum').value = eval(campo)
  } else {
    alert('Campos Vázios!');
  }
}
