import { conectaApi } from "./conectaApi.js";
import criaCardVideo from "./mostraVideos.js";

const botaoPesquisa = document.querySelector('[data-botao-pesquisa]');

async function buscaVideo(evento) {
    evento.preventDefault();

    const pesquisa = document.querySelector('[data-pesquisa]').value;

    const busca = await conectaApi.buscaVideo(pesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(criaCardVideo(elemento.titulo, elemento.descricao, elemento.url, elemento.imagens)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">O vídeo não foi encontrado. Tente novamente.</h2>`;
    }

}

botaoPesquisa.addEventListener('click', evento => buscaVideo(evento));

