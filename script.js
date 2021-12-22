var imgMacaco = document.getElementsByClassName('pri')[0];
     var divImgMacaco = document.getElementsByClassName('divImagemMacaco')[0];
     var campo = document.getElementsByClassName('campo')[0];
     var txtEsconder = document.getElementsByClassName('textoEsconder')[0];
     var divImgCipo = document.getElementsByClassName('divImagemCipo')[0];
     var divparaBaixo = document.getElementsByClassName('paraBaixo')[0];
     var divparaCima = document.getElementsByClassName('paraCima')[0];
     var divArvore2 = document.getElementsByClassName('arvore2')[0];
     var divArvore1 = document.getElementsByClassName('arvore1')[0];
     var restart = document.getElementsByClassName('restart')[0]

    function getRandom(){
    return Math.random() * (100 - 1) + 1;
    }
    var ale = Number.parseInt(getRandom())

     campo.style.display = 'none';
     divImgCipo.style.display = 'none';
     divparaBaixo.style.display = 'none';
     divparaCima.style.display = 'none';
     divArvore2.style.display = 'none';
     restart.style.display = 'none';

imgMacaco.addEventListener('click', function(){
    if(campo.style.display === 'block'){
        campo.style.display = 'none';
    }
    else{
        campo.style.display = 'block';
        divImgMacaco.style.display = 'none';
        txtEsconder.style.display = 'none';
        divImgCipo.style.display = 'block';
    }
    

});     


function mouseEmCima(imagem){
imagem.src="imagens/macacofeliz.png";
}

function mouseFora(imagem){
imagem.src="imagens/macaco.png";
}

var btnChutar = document.getElementsByName('btnChutar')[0]
var tentativas = 1
function calcular(){
    divparaCima.style.display = 'none';
    divparaBaixo.style.display = 'none';
if (tentativas === 9){
    var restam = 9 - tentativas
    divparaCima.style.display = 'block';
    let escritaAcertou = document.getElementsByClassName('pc')[0]
    escritaAcertou.innerHTML = `<strong>Que pena!</strong><br>Você não conseguiu encontrá-lo!<br>Acabaram suas tentativas, ele estava no número ${ale}`
    restart.style.display = 'block';
} else{
var numero = Number(window.document.getElementById('num').value)
if(numero === ale){
var restam = 9 - tentativas
divArvore2.style.display = 'block';
divArvore1.style.display = 'none';
divparaCima.style.display = 'block';
let escritaAcertou = document.getElementsByClassName('pc')[0]
escritaAcertou.innerHTML = `<strong>Parabéns</strong><br>Você conseguiu encontrá-lo!<br>Restavam ${restam} tentativas`
restart.style.display = 'block';
}
else if (numero < ale){
    //window.alert(`O número está mais para cima`)
    tentativas += 1;
    var restam = 9 - tentativas
    divparaCima.style.display = 'block';
    let escritapc = document.getElementsByClassName('pc')[0]
    escritapc.innerHTML = `Que pena, o macaquinho se escondeu <strong>mais para cima</strong> <br>Restam ${restam} tentativas.`
}
else if (numero > ale ){
    //window.alert(`O número está mais para baixo`)
    tentativas += 1;
    var restam = 9 - tentativas
    divparaBaixo.style.display = 'block';
    let escritapb = document.getElementsByClassName('pb')[0]
    escritapb.innerHTML = `Que pena, o macaquinho se escondeu <strong>mais para baixo</strong> <br>Restam ${restam} tentativas.`
}
}
}

function reiniciar(){
    window.location.reload()
}


