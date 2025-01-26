function botao() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let resultado = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let texto = "";

    // Itera sobre os dados da pesquisa e gera o HTML para cada resultado
    for (let dado of dados) {
        texto += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricaco-meta">${dado.descicao}</p>
                <p><a href="${dado.link}" target="_blank">Saiba mais</a></p> 
            </div>
        `;
    }

    // Atualiza o conteúdo do elemento HTML com os resultados gerados
    resultado.innerHTML = texto;
}