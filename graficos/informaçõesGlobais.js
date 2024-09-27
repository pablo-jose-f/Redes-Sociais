const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement ('p')
    paragrafo.classList.add ('graficos-container_texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dado.total_pessoas_conectadas} estão conectadas em algum rede social e paam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo);
    
}
visualizarInformacoesGlobais()