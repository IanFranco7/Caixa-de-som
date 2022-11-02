function tocaSom(seletorAudio) {

   const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
            elemento.play();
    }else{
        alert('Elemento não encontrado');
    }

}

document.querySelectorAll('.tecla');

const ListaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    /* essa function () é uma função anonima que foi criado só pra não dar erro, pq caso chamasse o tocaSom direto, seria como se ao ABRIR a pagina já carregaria o som antes mesmo de clicar em algo(interagir), ai por isso chamou a anonima pq vc tá CRIANDO, então ta suave so criou mas ainda nao chamou teoricamente. */

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code);
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}
