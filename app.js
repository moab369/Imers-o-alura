function botao() {
    // Seleciona o elemento HTML onde os resultados serão exibidos
    let resultado = document.getElementById('resultados-pesquisa');
    let pesquisa = document.getElementById('pesquisa').value;
    if(pesquisa == ""){
      resultado.innerHTML = "<p>Nemhum resultado encontrado</p>"
     return;
    }
    pesquisa = pesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let texto = "";
    let titulo = "";
    let descicao = "";
    

    // Itera sobre os dados da pesquisa e gera o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descicao = dado.descicao.toLowerCase();
      if(titulo.includes(pesquisa) || descicao.includes(pesquisa)){
        texto += `
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricaco-meta">${dado.descicao}</p>
                <p><a href="${dado.link}" target="_blank">Saiba mais</a></p> 
            </div>
        `;
      }
    }
   if(!resultado){
     resultado.innerHTML = "<p>Nemhum resultado encontrado</p>"
   }
    // Atualiza o conteúdo do elemento HTML com os resultados gerados
    resultado.innerHTML = texto;
    resultado = "";
}
